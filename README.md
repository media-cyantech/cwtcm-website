# 加西中医官网 · Canadian Western TCM Clinic

大温哥华四家诊所（列治文 / 本拿比 / 温哥华西区 / 白石）的中英双语官网。

**当前预览地址**：https://cwtcm-preview.vercel.app
**中文版**：所有页面加 `-ZH` 后缀，例如 `/Homepage-ZH.html`

---

## 一、这是什么

一个**纯静态站点**——没有构建步骤、没有后端、没有数据库。直接把整个目录扔到任何静态服务器（Nginx / Apache / S3 / Vercel / Netlify）就能跑。

- **页面**：每个 `.html` 是一个独立的「外壳」，负责加载依赖并挂载对应的 React 组件
- **数据**：全站文案与配置集中在 `copy.js`（英文）和 `copy-zh.js`（中文），共约 495 KB
- **视图**：`.jsx` 文件是共享的 React 组件模板，共约 305 KB
- **样式**：`tokens.css` 定义设计变量（配色、字体、间距），组件内用内联样式引用

### 本地预览
不需要 npm install。任意静态服务器即可：

```bash
python3 -m http.server 8080
```

然后打开 http://localhost:8080/Homepage.html

> ⚠️ 必须通过 HTTP 服务器打开，不能直接双击 `.html` 文件（`file://` 协议下浏览器会拦截脚本加载）。

---

## 二、目录结构

```
├── *.html                    页面外壳（英文），共 20+ 个
├── *-ZH.html                 对应中文版
├── Conditions/               8 个调理方向详情页（中英各一）
├── Treatments/               18 个诊疗项目详情页（中英各一）
├── Practitioners/            40+ 位医师个人页（中英各一）
├── copy.js                   英文全站数据（文案、价格、门店、医师、外链）
├── copy-zh.js                中文全站数据
├── *.jsx                     React 组件模板（页面区块、卡片、详情页布局）
├── tokens.css                设计变量
├── assets/                   图片资源 22 MB（门店、医师、疗法、品牌）
└── vercel.json               路由配置：cleanUrls=false（URL 必须带 .html）
```

### 改内容去哪儿改
| 要改什么 | 改哪个文件 |
|---|---|
| 任何文案、价格、门店信息、医师资料 | `copy.js`（英文）+ `copy-zh.js`（中文），**两个都要改** |
| 页面布局、组件外观 | 对应的 `.jsx` |
| 配色、字体、间距 | `tokens.css` |
| 新增页面 | 复制一个同类 `.html` 外壳，改标题与底部的组件挂载调用 |

> 改完 `copy.js` / `copy-zh.js` 后建议先跑 `node --check copy.js && node --check copy-zh.js` 验证语法，语法错会导致整页白屏。

---

## 三、⚠️ 上生产前必须处理的事（最重要的一节）

当前架构是为**快速预览与频繁改稿**设计的，直接上生产会有明显问题。

### 3.1 每次打开页面要下载 4.2 MB 的运行时

页面从 unpkg CDN 加载 React + ReactDOM + **Babel Standalone**，并在浏览器里**实时编译 JSX**：

| 文件 | 体积 |
|---|---|
| `react.development.js` | 107 KB |
| `react-dom.development.js` | **1,054 KB** |
| `@babel/standalone/babel.min.js` | **3,064 KB** |
| **合计** | **约 4.2 MB** |

加上本站自身 305 KB 的 JSX（每次访问都要在浏览器里现场编译）和 495 KB 数据文件，**单页首屏成本约 5 MB**。

而且用的是 **development 版 React**——体积比 production 版大数倍，且带额外的运行时检查。

### 3.2 三个连带风险

1. **SEO**：内容全部客户端渲染。Google 能执行 JS，但对本地商户站（要抢「列治文 中医」「Richmond acupuncture」这类词）来说，首屏是空 HTML 是明显劣势
2. **移动端体验**：4G 下 5 MB 首屏，跳出率会很难看
3. **可用性依赖 unpkg**：CDN 一挂，全站白屏。生产环境不该把可用性押在第三方 CDN 上

### 3.3 三条可选路线（由技术团队评估）

| 方案 | 做法 | 工作量 | 效果 |
|---|---|---|---|
| **A. 最小改动**（保底） | 换 production 版 React、把三个依赖下载到本地 `vendor/` 目录不走 CDN、给资源加缓存头 | 半天 | 体积降到约 1.4 MB，去掉 CDN 依赖。**仍是客户端渲染，SEO 无改善** |
| **B. 预编译 JSX**（推荐折中） | 引入构建步骤（esbuild / Vite），把 JSX 预编译成 JS，去掉浏览器里的 Babel | 1–2 天 | 首屏降到约 200 KB，快一个数量级。SEO 仍是客户端渲染 |
| **C. 迁移到 SSG**（彻底） | 用 Next.js / Astro 重写外壳，`copy.js` 数据层可直接复用，输出静态 HTML | 1–2 周 | 首屏 HTML 直出，SEO 最优，Lighthouse 可到 90+ |

**建议**：如果近期要投放广告或做 SEO，走 **B 或 C**；如果只是先把站放上服务器，**A 也能上**，但请在上线后排期做 B。

无论走哪条，`copy.js` / `copy-zh.js` 的数据结构都可以原样复用——这是全站的内容层，与渲染方式解耦。

---

## 四、部署

### 当前部署方式（Vercel）
仓库根目录的 `vercel.json`：
```json
{ "cleanUrls": false, "trailingSlash": false }
```

`cleanUrls: false` 意味着 **URL 必须带 `.html` 后缀**。全站内链、`copy.js` 里的外链、以及 AI 智能体知识库里的链接都是按这个规则写的。

> ⚠️ **换服务器时如果改成 cleanUrls / 去掉 .html，全站内链会失效**。若要改，需要同步更新 `copy.js`、`copy-zh.js` 里所有 `.html` 引用，以及智能体知识库中的外链 URL。

### 部署到自有服务器（Nginx 示例）
```nginx
server {
    listen 80;
    server_name cwtcm.example.com;
    root /var/www/cwtcm;
    index Homepage.html;

    location / {
        try_files $uri $uri.html =404;
    }

    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 上线前检查清单
- [ ] 已按第三节评估并处理运行时体积问题
- [ ] `assets/` 目录完整上传（22 MB，110 个被引用的文件）
- [ ] 正式域名替换：全站目前指向 `cwtcm-preview.vercel.app`
- [ ] 中英文页面互链（`hreflang`）在新域名下仍正确
- [ ] 四家门店的 Jane 预约链接可正常跳转（白石用**独立**系统 `cwtcm.janeapp.com`，其余三店用 `canadianwesterntcmclinic.janeapp.com`）
- [ ] 检查 `Homepage.html` 与 `Homepage-ZH.html` 在移动端的表现

---

## 五、已知待办

| 项 | 说明 |
|---|---|
| 运行时体积 | 见第三节，上生产前必须评估 |
| 4 个未引用资源 | `assets/locations/burnaby/hero-burnaby-service-lightboxes-night.jpg`、`assets/locations/whiterock/gallery-whiterock-awning-sign.jpg`、`assets/practitioners/bby-lareina-di.jpg`、`assets/practitioners/van-daisy-nie.jpg`（后两位医师已下线），共 0.9 MB，可删 |
| 6 组重复图片 | 同一张图同时存在于 `assets/locations/` 和 `assets/locations/<门店>/`，约 3.4 MB。**两种路径都有页面在引用**，合并前需先统一引用路径 |
| 正式域名 | 待客户确定 |
| 客户待确认内容 | 白石门店价目、统一客服电话/邮箱等，详见 AI 智能体交付包中的《待确认信息清单》 |

---

## 六、相关资产

- **AI 前台智能体「小卫 / Way」**：独立交付包，含知识库、角色配置与数据库导入脚本。其知识库中的外链 URL 与本站页面路径强相关，**本站 URL 结构变更时需同步更新**
