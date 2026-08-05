# ⚠️ 由 -skill-rag-/seo/vendor-to-sites.py 从 audit.py 裁剪生成，不要手改。
#    这是 加西中医 Canadian Western TCM 的单站版本，默认扫描本仓库的 dist/。

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SEO / GEO 回归审计脚本 —— 加西中医 · 温顶集团

用法：
    python3 seo/audit.py                     # 审计两个站
    python3 seo/audit.py --site cwtcm        # 只审加西中医
    python3 seo/audit.py --site guaranti     # 只审温顶
    python3 seo/audit.py --strict            # 有 P0 问题时以退出码 1 结束（可用于上线前拦截）

设计意图：
    这个脚本是「上线前一票否决」的自动化版本。2026-08 的基线见
    ../SEO-GEO审计报告-两站-2026-08.md。迁移 Astro 后复跑，用于确认修复真的生效。

    ⚠️ 本脚本只看**源码 HTML**，不执行 JS。这是刻意的——
    多数 AI 爬虫（ChatGPT / Perplexity）也不执行 JS，
    源码里没有的东西，对 GEO 就等于不存在。
"""

import argparse
import glob
import hashlib
import io
import json
import os
import re
import sys
from collections import Counter, defaultdict

# ── 站点配置 ────────────────────────────────────────────────────────────────
SITES = {
    "cwtcm": {
        "label": "加西中医 Canadian Western TCM",
        "root": "dist",
        "pattern": "dist/**/*.html",
        "domain": "https://cwtcm.ca",          # 上线域名，改这里
        "langs": {"en", "zh-Hans"},             # 期望的 <html lang> 取值
        # @astrojs/sitemap 生成的是 sitemap-index.xml（+ 分片 sitemap-0.xml），
        # 这是带索引时 Google 期望的入口名，robots.txt 也指向它。
        "site_files": ["sitemap-index.xml", "robots.txt", "llms.txt"],
    },
}

# 允许（且应当）是 noindex 的页面
EXPECT_NOINDEX = {"thank-you.html", "404.html", "privacy.html", "terms.html",
                  "cookies.html", "compliance.html"}

TITLE_MAX = 60      # 像素上更准，但字符数够用作提示
DESC_MIN, DESC_MAX = 70, 160
# 中文按字符数算是另一套标准 —— 同样的信息量，中文字数约为英文的一半，
# 用 70–160 去卡中文页会 100% 误报。搜索结果里按像素宽度截断，中文字更宽。
DESC_MIN_CJK, DESC_MAX_CJK = 35, 80


def is_cjk(s):
    cjk = len(re.findall(r"[\u4e00-\u9fff]", s))
    return cjk * 2 > len(s)


def head_of(s):
    i = s.lower().find("</head>")
    return s[:i] if i > 0 else s


def visible_text(html):
    """源码里爬虫能直接看到的可见文字（不执行 JS）。"""
    body = html
    for tag in ("script", "style", "template", "svg", "noscript"):
        body = re.sub(rf"<{tag}\b.*?</{tag}>", " ", body, flags=re.S | re.I)
    body = re.sub(r"<!--.*?-->", " ", body, flags=re.S)
    body = re.sub(r"<[^>]+>", " ", body)
    return re.sub(r"\s+", " ", body).strip()


def noindex_meta(head):
    return bool(re.search(r'<meta[^>]+name=["\']robots["\'][^>]*noindex', head, re.I))


def is_absolute(url):
    return bool(re.match(r"^https?://", (url or "").strip(), re.I))


# 扫描时永远跳过的目录。dist/ 是 Astro 构建产物 —— 默认扫源码目录时把它一起扫进来，
# 页数会翻倍、重复 title 会误报；要审产物请显式用 --root cwtcm-website/dist。
SKIP_DIRS = ("/.git/", "/vendor/", "/node_modules/", "/dist/", "/.astro/")


def audit_site(key, cfg):
    # 过滤按「相对 root 的路径」判断 —— 否则 --root cwtcm-website/dist 会因为
    # 路径里含 /dist/ 把自己全部滤掉。
    files = sorted(f for f in glob.glob(cfg["pattern"], recursive=True)
                   if not any(d in "/" + os.path.relpath(f, cfg["root"])
                              for d in SKIP_DIRS))
    findings = defaultdict(list)   # 级别 → [(文件, 说明)]
    stats = Counter()
    titles = Counter()
    digests = defaultdict(list)
    schema_types = Counter()

    for f in files:
        rel = os.path.relpath(f, cfg["root"])
        s = io.open(f, encoding="utf-8", errors="ignore").read()
        head = head_of(s)
        # 页面标识：clean URL 下每个文件都叫 index.html，basename 区分不了页面，
        # 用它上一级目录名（/en/privacy/index.html → privacy.html）。
        base = os.path.basename(f)
        if base == "index.html":
            parent = os.path.basename(os.path.dirname(f))
            if parent and parent not in (os.path.basename(cfg["root"]), "en", "zh", "tw"):
                base = parent + ".html"
        digests[hashlib.sha256(s.encode()).hexdigest()].append(rel)

        # 跳转壳页（meta refresh + noindex）不参与内容检查 —— 它本来就没有正文、
        # 没有 h1、也不该被索引。三语站的根路径 / 就是这种页面（正解是 Nginx 301，
        # 这个壳只是漏配时的兜底）。按内容页去审它，会刷出一堆假 P0。
        if re.search(r'<meta[^>]+http-equiv=["\']refresh["\']', head, re.I) and \
           re.search(r'<meta[^>]+name=["\']robots["\'][^>]*noindex', head, re.I):
            stats["redirect_stub"] += 1
            continue

        # title
        m = re.search(r"<title>(.*?)</title>", head, re.S | re.I)
        if not m:
            findings["P0"].append((rel, "缺 <title>"))
        else:
            t = re.sub(r"\s+", " ", m.group(1)).strip()
            titles[t] += 1
            stats["title"] += 1
            if len(t) > TITLE_MAX:
                findings["P2"].append((rel, f"title 偏长（{len(t)} 字符）"))

        # description
        m = re.search(r'<meta[^>]+name=["\']description["\'][^>]*content=["\'](.*?)["\']',
                      head, re.S | re.I)
        if not m:
            findings["P0"].append((rel, "缺 meta description"))
        else:
            d = m.group(1).strip()
            stats["desc"] += 1
            lo, hi = (DESC_MIN_CJK, DESC_MAX_CJK) if is_cjk(d) else (DESC_MIN, DESC_MAX)
            # noindex 页面不进搜索结果，描述长短无所谓
            if not noindex_meta(head) and not (lo <= len(d) <= hi):
                findings["P2"].append((rel, f"description 长度 {len(d)}，建议 {lo}–{hi}"))

        # canonical —— 必须存在且为绝对 URL
        m = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]*href=["\'](.*?)["\']', head, re.I)
        if not m:
            findings["P0"].append((rel, "缺 canonical"))
        else:
            stats["canonical"] += 1
            if not is_absolute(m.group(1)):
                findings["P0"].append((rel, f"canonical 是相对路径：{m.group(1)}"))
            elif not m.group(1).startswith(cfg["domain"]):
                findings["P1"].append((rel, f"canonical 域名不符：{m.group(1)}"))

        # hreflang —— 必须绝对 URL，且需有 x-default
        alts = re.findall(r'<link[^>]+rel=["\']alternate["\'][^>]*hreflang=["\']([^"\']+)["\'][^>]*href=["\']([^"\']+)["\']',
                          head, re.I)
        if alts:
            stats["hreflang"] += 1
            rels = [a[0] for a in alts]
            bad = [h for _, h in alts if not is_absolute(h)]
            if bad:
                findings["P0"].append((rel, f"hreflang 相对路径 {len(bad)} 条（Google 会整组忽略）"))
            if "x-default" not in rels:
                findings["P1"].append((rel, "hreflang 缺 x-default"))

        # Open Graph / Twitter
        if re.search(r'property=["\']og:title', head, re.I):
            stats["og"] += 1
        else:
            findings["P1"].append((rel, "缺 Open Graph（微信/社媒分享无卡片）"))
        if re.search(r'name=["\']twitter:card', head, re.I):
            stats["tw"] += 1

        # robots meta
        noindex = bool(re.search(r'<meta[^>]+name=["\']robots["\'][^>]*noindex', head, re.I))
        if base in EXPECT_NOINDEX and not noindex:
            findings["P1"].append((rel, "应为 noindex 但没有"))
        if noindex and base not in EXPECT_NOINDEX:
            findings["P1"].append((rel, "意外的 noindex"))

        # JSON-LD
        blocks = re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', s, re.S | re.I)
        if not blocks and not noindex:
            # noindex 的页面（隐私/条款/致谢/404）不参与搜索结果，不需要结构化数据
            findings["P1"].append((rel, "无 JSON-LD 结构化数据"))
        for b in blocks:
            b = b.strip()
            if not b or b == "{}":
                findings["P1"].append((rel, "JSON-LD 是空壳（可能靠 JS 运行时填充 → AI 爬虫读不到）"))
                continue
            try:
                data = json.loads(b)
            except Exception as e:
                findings["P0"].append((rel, f"JSON-LD 解析失败：{e}"))
                continue
            stats["jsonld"] += 1
            # @type 可以是字符串也可以是数组（如 ["MedicalClinic","LocalBusiness"]）——
            # 只按字符串匹配会把多类型节点整个漏掉，报告看着像没打上 schema。
            def walk_types(node):
                if isinstance(node, dict):
                    ty = node.get("@type")
                    for t in ([ty] if isinstance(ty, str) else ty or []):
                        schema_types[t] += 1
                    for v in node.values():
                        walk_types(v)
                elif isinstance(node, list):
                    for v in node:
                        walk_types(v)
            walk_types(data)
            # schema 里的 url/image/logo 必须是绝对 URL
            for field in ("url", "image", "logo"):
                for v in re.findall(rf'"{field}"\s*:\s*"([^"]+)"', b):
                    if not is_absolute(v):
                        findings["P1"].append((rel, f'JSON-LD "{field}" 是相对路径：{v}'))
                        break

        # H1（源码中）
        h1 = len(re.findall(r"<h1[\s>]", s, re.I))
        stats[f"h1_{min(h1,2)}"] += 1
        if h1 == 0:
            findings["P0"].append((rel, "源码中无 <h1>（客户端渲染 → 爬虫看不到）"))
        elif h1 > 1:
            findings["P2"].append((rel, f"多个 <h1>（{h1} 个）"))

        # html lang
        m = re.search(r"<html[^>]+lang=[\"']([^\"']+)", s, re.I)
        lang = m.group(1) if m else None
        if not lang:
            findings["P1"].append((rel, "缺 <html lang>"))
        elif lang not in cfg["langs"]:
            findings["P2"].append((rel, f'<html lang="{lang}"> 不在期望集合 {sorted(cfg["langs"])}'))

        # 首屏可见文字（GEO 关键指标）
        vt = len(visible_text(s))
        stats["visible_total"] += vt
        if vt < 200:
            # 分桶，避免按精确字数刷屏；真正要看的是「有多少页面几乎没有可见文字」
            findings["P0"].append((rel, "源码可见文字 <200 字 —— 内容全靠 JS 渲染，AI 爬虫读不到"))

    # 重复 title
    for t, c in titles.items():
        if c > 1:
            findings["P1"].append(("(全站)", f"重复 title ×{c}：{t[:60]}"))

    # 字节相同的重复文件
    for h, group in digests.items():
        if len(group) > 1:
            findings["P1"].append(("(全站)", f"文件内容完全相同：{' / '.join(group)}"))

    # 站点级文件
    for sf in cfg["site_files"]:
        if not os.path.exists(os.path.join(cfg["root"], sf)):
            findings["P0" if sf != "llms.txt" else "P1"].append(("(根目录)", f"缺 {sf}"))

    return files, findings, stats, schema_types


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--site", choices=list(SITES) + ["all"], default="cwtcm")
    ap.add_argument("--strict", action="store_true", help="有 P0 问题时退出码 1")
    ap.add_argument("--verbose", "-v", action="store_true", help="逐条列出所有问题")
    ap.add_argument("--root", help="覆盖被扫描的目录，用于审计 Astro 构建产物，"
                                   "例如 --site cwtcm --root cwtcm-website/dist")
    args = ap.parse_args()

    keys = list(SITES) if args.site == "all" else [args.site]
    if args.root and len(keys) != 1:
        ap.error("--root 只能配合单个 --site 使用")
    total_p0 = 0

    for k in keys:
        cfg = dict(SITES[k])
        if args.root:
            cfg["root"] = args.root.rstrip("/")
            cfg["pattern"] = cfg["root"] + "/**/*.html"
        if not os.path.isdir(cfg["root"]):
            print(f"⚠️  找不到目录 {cfg['root']}，跳过（请在两个仓库的父目录下运行）\n")
            continue

        files, findings, stats, types = audit_site(k, cfg)
        n = len(files)
        print("═" * 68)
        print(f"  {cfg['label']}   {n} 个页面   目标域名 {cfg['domain']}")
        print("═" * 68)

        def pct(key):
            return f"{stats[key]:>4}/{n}"

        print(f"  title            {pct('title')}")
        print(f"  description      {pct('desc')}")
        print(f"  canonical        {pct('canonical')}")
        print(f"  hreflang         {pct('hreflang')}")
        print(f"  Open Graph       {pct('og')}")
        print(f"  JSON-LD          {stats['jsonld']:>4} 段")
        print(f"  源码可见文字     平均 {stats['visible_total'] // max(n,1)} 字/页   ← GEO 关键")
        print(f"  schema 类型      {dict(types) if types else '（无）'}")

        print("\n  ── 问题汇总 ──")
        for level, label in (("P0", "🔴 P0 致命"), ("P1", "🟠 P1 重要"), ("P2", "🟡 P2 建议")):
            items = findings.get(level, [])
            if not items:
                print(f"  {label}: 0")
                continue
            grouped = Counter(msg for _, msg in items)
            print(f"  {label}: {len(items)} 条")
            for msg, c in grouped.most_common(8 if not args.verbose else 999):
                print(f"      ×{c:<4} {msg}")
            if not args.verbose and len(grouped) > 8:
                print(f"      …… 另有 {len(grouped)-8} 类，加 -v 查看全部")
        total_p0 += len(findings.get("P0", []))
        print()

    if args.strict and total_p0:
        print(f"❌ 存在 {total_p0} 条 P0 问题，不允许上线。")
        sys.exit(1)
    print("✅ 审计完成。" + ("" if total_p0 == 0 else f" 注意：仍有 {total_p0} 条 P0。"))


if __name__ == "__main__":
    main()
