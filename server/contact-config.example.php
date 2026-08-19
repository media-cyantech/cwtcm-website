<?php
/**
 * 复制成同目录的 contact-config.php 再填。
 *
 * ⚠️ contact-config.php 绝对不要提交进仓库，也不要发到群里 ——
 *    里面是能以某个邮箱身份发信的凭据。
 *    .gitignore 已经挡了这个文件名，但还是提醒一句。
 *
 * 下面标 🔴 的三项需要诊所提供（见「给诊所-邮箱与表单需要配合的事.md」），
 * 其余都已经按 cwtcm.ca 填好，不用改。
 */

return [
    // 🔴 收件人 —— 表单提交发到哪个邮箱。诊所目前有没有统一的客服/预约信箱？
    //    没有的话建议现在建一个，例如 booking@cwtcm.ca 或 info@cwtcm.ca。
    'to'        => '',

    // 可选：需要按门店分流时才填。键是门店名（要跟网站表单下拉框里的值
    // 完全一致：Richmond / Burnaby / Vancouver / White Rock），值是收件邮箱。
    // 不需要按门店分流就把这张表留空 —— 所有门店都会发到上面的 'to'。
    'to_by_clinic' => [
        // 'Richmond'   => 'richmond@cwtcm.ca',
        // 'Burnaby'    => 'burnaby@cwtcm.ca',
        // 'Vancouver'  => 'vancouver@cwtcm.ca',
        // 'White Rock' => 'whiterock@cwtcm.ca',
    ],

    'from_name' => 'Canadian Western TCM Website',

    /* ------------------------------------------------------------------
     * 用哪个邮箱把信发出去
     *
     * 铁规则只有一条：
     *   smtp_user 必须就是你能登录的那个邮箱，From 会直接取它。
     *   代码不允许两者分开填 —— 拆开就是 SPF fail 的经典配法。
     *
     * ⚠️ 不需要拥有 cwtcm.ca。往上面 'to' 那个邮箱投递不需要任何权限，
     *    只有「发件」那一侧才需要你控制。
     *
     * 建议用一个专门的地址，例如 noreply@cwtcm.ca 或 web@cwtcm.ca ——
     * 不要用医师或前台的日常个人邮箱。
     * ------------------------------------------------------------------ */

    // 按发信邮箱的服务商选：
    //   Gmail / Google Workspace   smtp.gmail.com        587
    //   Microsoft 365 / Outlook    smtp.office365.com    587
    //   iCloud                     smtp.mail.me.com      587
    //   自建 / 虚拟主机邮箱          问主机商要 SMTP 地址   587
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,

    // 🔴 用来发信的邮箱地址
    'smtp_user' => '',

    // 🔴 应用专用密码（App Password），不是登录密码。
    //    Google 账号 → 安全性 → 两步验证（要先开启）→ 应用专用密码 → 生成，
    //    会得到一串 16 位、显示成四组的字符。
    //    Workspace 需要管理员先允许该账号使用应用专用密码。
    //    ⚠️ 这一行由诊所或服务器管理员直接在服务器上填，不要经手微信/邮件转交。
    'smtp_pass' => '',

    // 限流计数文件的存放目录，需要 PHP 进程可写。已按 cwtcm.ca 的站点路径填好。
    'rate_dir'  => '/www/wwwroot/cwtcm.ca/.form-rate',
];
