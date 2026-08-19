# 联系表单接收端 · 部署说明

网站上的「联系我们 / 预约」表单，目前**收不到任何内容** —— 前端还没接上
接收端（Contact.html 上「在线表单即将上线」说的就是这件事）。这一份就是
用来补上接收端的。

**需要诊所先回复两件事**，见同目录上一级的
`给诊所-邮箱与表单需要配合的事.md`：发信邮箱 + 应用专用密码、以及收件邮箱。
拿到之后照着下面的步骤部署，大约一个工作日能接通。

---

## 为什么必须走认证 SMTP，不能用 PHP 的 mail()

`cwtcm.ca` 的 SPF 记录只会授权诊所实际在用的发信邮箱。用 PHP 自带的
`mail()` 直接从这台 VPS 发出去，发件域写的是 cwtcm.ca，但来源 IP 不在
SPF 授权范围内 —— 收件方判定 **SPF fail**，轻则进垃圾箱，重则直接退信。
表单提交本来就少，进了垃圾箱等于没做。

所以 `contact.php` 用一个真实邮箱做 SMTP 认证中继，发出去的信在
SPF 和 DKIM 上都是合规的。**铁规则只有一条**：发件地址必须就是你能登录
的那个邮箱，代码里 `From` 直接取自 `smtp_user`，不给手动拆开的余地
（拆开就是 SPF fail 的经典配法）。

---

## 部署步骤

### 1. 拿到诊所提供的两样东西

- 发信邮箱 + 应用专用密码（不是登录密码）
- 收件邮箱（要不要按门店分流，见下面「按门店分流」一节）

### 2. 上传两个文件

```
/www/wwwroot/cwtcm.ca/api/contact.php
/www/wwwroot/cwtcm.ca/api/contact-config.php
```

`contact.php` 直接从仓库的 `server/contact.php` 拷。
`contact-config.php` 用 `server/contact-config.example.php` 做模板，
标 🔴 的三项（`to` / `smtp_user` / `smtp_pass`）填上诊所给的信息，
其余字段已经按 cwtcm.ca 填好。

**⚠️ `contact-config.php` 永远不要提交进仓库、不要发到群里。**
仓库的 `.gitignore` 已经挡了这个文件名。最稳妥的做法是诊所或服务器
管理员直接在服务器上填这个文件，密码不经手任何聊天工具。

权限：
```bash
chown www:www /www/wwwroot/cwtcm.ca/api/contact-config.php
chmod 600     /www/wwwroot/cwtcm.ca/api/contact-config.php
mkdir -p /www/wwwroot/cwtcm.ca/.form-rate
chown www:www /www/wwwroot/cwtcm.ca/.form-rate
```

### 3. nginx 加一段

站点是纯静态原子发布（`current` 是每次发布都会换掉的软链接），需要给
这一个路径单独开 PHP。在站点配置里加：

```nginx
# 表单接收端 —— 只有这一个路径走 PHP，其余保持静态
location = /api/contact {
    fastcgi_pass   unix:/tmp/php-cgi-82.sock;   # 按宝塔里实际的 PHP 版本改
    # ⚠️ 这里必须写**绝对路径**，不能用 $document_root。
    #    站点的 root 是 .../current（每次发布都会换掉的软链接），
    #    而这两个 PHP 文件要放在 current 外面才不会被部署冲掉。
    #    用 $document_root 会去 current/api/ 找，找不到 → PHP-FPM 报
    #    Primary script unknown → nginx 返回 404（不是 502，容易误判）。
    fastcgi_param  SCRIPT_FILENAME /www/wwwroot/cwtcm.ca/api/contact.php;
    include        fastcgi_params;
}

# 双保险：配置文件本来就在 document root 之外、HTTP 够不着，这条再挡一次
location ~ /api/contact-config\.php$ { deny all; }
```

改完 `nginx -t` 再 `nginx -s reload`。

### 4. 冒烟测试

```bash
curl -sS -X POST https://cwtcm.ca/api/contact \
  -d "name=测试" -d "email=you@example.com" \
  -d "phone=778-000-0000" -d "clinic=Richmond" \
  -d "message=这是一条部署测试" -d "lang=zh"
```

期望返回 `{"ok":true}`，并且收件邮箱收到一封主题为
`[网站预约] 测试 · Richmond` 的邮件。

**⚠️ 在服务器上自己 curl 测试，命令要加 `-k`** —— 宝塔服务器上老版本
curl 对现代证书的 keyUsage 判断有 bug，报错会指向证书（但证书是好的），
其实跟 HTTPS 证书本身无关，加 `-k` 跳过验证即可。

第一次测试请让诊所同时看一眼垃圾箱 —— 如果发件邮箱和 cwtcm.ca 主域名
不一致（比如临时用了个人 Gmail 过渡），收件方偶尔会先扔进垃圾箱，标记
「不是垃圾邮件」或把发件地址加进联系人，后续就稳定了。

常见返回值：

| 返回 | 含义 | 怎么办 |
|---|---|---|
| `{"ok":true}` | 成功 | 去邮箱确认收到 |
| `not_configured` | 找不到 contact-config.php | 检查路径和文件名 |
| `send_failed` | SMTP 失败 | 看 PHP 错误日志里 `[contact]` 开头那行 |
| `too_many` | 触发限流（同 IP 10 分钟 5 次） | 正常，换个 IP 或等 10 分钟 |
| 404 / 走静态 | nginx 那段没生效 | `nginx -t` 看有没有报错 |

### 5. 告诉我们一声，我们来接前端

服务器端通了、冒烟测试收到邮件之后，我们把 Contact.html 的表单从
「即将上线」的占位状态接到 `/api/contact`，重新构建部署。**这一步之前，
前端行为完全不变**（还是提交后提示「表单提交端点待确认」，不会中途出现
半截状态、也不会有访客的咨询悄悄丢掉却看起来提交成功了）。

---

## 按门店分流（可选）

网站表单上有「选择门店」这一项。如果诊所希望不同门店的预约直接发到
不同的信箱，在 `contact-config.php` 里填 `to_by_clinic` 这张表就行
（模板里已经写好格式和注释）；不需要分流就留空，所有门店统一发到
`to` 这一个收件人。这个后面随时可以改，不用重新部署代码。

## 脚本里已经做了的事

- **蜜罐字段**：表单里有个隐藏的 `company` 输入框，真人看不见。机器人填了就静默丢弃，不回报错（不让它知道被识破）。
- **限流**：同一 IP 每 10 分钟最多 5 次。
- **长度上限**：姓名 100、邮箱 200、电话 60、留言 4000 字符，防止超长提交。
- **挡 header 注入**：所有输入先剥掉控制字符再进邮件头。
- **中文不乱码**：主题和显示名做 MIME 编码，正文用 base64 + UTF-8。
- **Reply-To 指向访客**：前台/医师在邮箱里直接点「回复」就是回给访客本人。
- **邮件里带上下文**：门店、提交页面、语言版本、时间、来源 IP。
- **不落库**：只发邮件，服务器上不存访客资料（详见
  `给诊所-邮箱与表单需要配合的事.md` 里的隐私说明）。

## 还没做、诊所可能想要的

- **自动回复访客**：现在只发给诊所，访客那边收不到确认信。要加的话告诉我们。
- **提交存档**：只发邮件，没有落库。邮件被误删就找不回来了。
- **验证码**：目前靠蜜罐 + 限流。量大了再考虑 Turnstile 一类。

---

## ⚠️ 这份代码没有在真实环境跑过

本机没有 PHP 环境，`contact.php` 的语法用 `php -l`（或 Docker 里的
`php:8.2-cli`）检查过、逻辑逐行核对过，但**没有实际发过一封信**。
第一次部署请务必按上面第 4 步做冒烟测试，不要直接认为它能用。
有报错把 `[contact]` 那行日志发给我们。
