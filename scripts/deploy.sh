#!/usr/bin/env bash
# 原子发布到宝塔服务器。
#
# 为什么不是「直接把 dist/ 传到网站根目录」：
#   传输过程中站点会处于半新半旧状态，用户可能拿到不匹配的 HTML 与 CSS。
#   这里改成：传到 releases/<时间戳>/，传完再**原子地**切换 current 软链接。
#   回滚 = 把软链接切回上一个，2 秒完成。
#
# --link-dest 让未变化的文件在服务器上以硬链接复用上一个 release：
#   164 个页面改 1 页，实际传输与落盘都只有几 KB。
#
# 需要的环境变量（CI 里从 Secrets 注入，本地跑就自己 export）：
#   SSH_HOST SSH_USER SSH_PORT REMOTE_ROOT [KEEP=5]
set -euo pipefail

: "${SSH_HOST:?缺 SSH_HOST}"
: "${SSH_USER:?缺 SSH_USER}"
: "${SSH_PORT:=22}"
: "${REMOTE_ROOT:?缺 REMOTE_ROOT，例如 /www/wwwroot/cwtcm.ca}"
: "${KEEP:=5}"

DIST="dist"
[ -d "$DIST" ] || { echo "❌ 没有 $DIST，先 pnpm build"; exit 1; }
[ -f "$DIST/Homepage.html" ] || { echo "❌ dist 里没有 Homepage.html，构建可能不完整"; exit 1; }

RELEASE="$(date +%Y%m%d%H%M%S)"
REMOTE_RELEASE="$REMOTE_ROOT/releases/$RELEASE"
SSH_OPTS="-p $SSH_PORT -o StrictHostKeyChecking=accept-new -o BatchMode=yes"

echo "▶ release: $RELEASE"

# current 是软链接，--link-dest 需要它指向的真实目录
PREV="$(ssh $SSH_OPTS "$SSH_USER@$SSH_HOST" "readlink -f '$REMOTE_ROOT/current' 2>/dev/null || true")"

RSYNC=(-az --delete --human-readable --info=stats1)
if [ -n "$PREV" ]; then
  RSYNC+=(--link-dest="$PREV/")
  echo "▶ 增量基准: $PREV"
fi

echo "▶ 同步文件…"
rsync "${RSYNC[@]}" -e "ssh $SSH_OPTS" "$DIST/" "$SSH_USER@$SSH_HOST:$REMOTE_RELEASE/"

echo "▶ 原子切换…"
ssh $SSH_OPTS "$SSH_USER@$SSH_HOST" bash -s <<EOF
set -euo pipefail
# ln -sfn 到临时名再 mv -Tf，整个替换是一次原子的 rename
ln -sfn "$REMOTE_RELEASE" "$REMOTE_ROOT/current.tmp"
mv -Tf "$REMOTE_ROOT/current.tmp" "$REMOTE_ROOT/current"
cd "$REMOTE_ROOT/releases"
ls -1dt */ | tail -n +$((KEEP + 1)) | xargs -r rm -rf
echo "  当前 release: \$(basename \$(readlink -f "$REMOTE_ROOT/current"))"
echo "  保留的 release: \$(ls -1dt */ | tr -d '/' | tr '\n' ' ')"
EOF

echo "✅ 部署完成：$RELEASE"
