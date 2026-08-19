<?php
/**
 * 联系表单接收端 —— 把网站上的咨询/预约提交转成邮件发到诊所信箱。
 *
 * 为什么必须走认证 SMTP 中继，不能用 PHP 的 mail()：
 *   cwtcm.ca 的 SPF 记录只会授权诊所实际使用的发信邮箱（Google Workspace /
 *   Microsoft 365 / 主机商邮箱……）。直接用 PHP mail() 从这台 VPS 的 IP
 *   发出去，发件域是 cwtcm.ca 但来源 IP 不在 SPF 授权范围内 —— 收件方会
 *   判定 SPF fail，轻则进垃圾箱，重则直接退信。所以这里用一个真实邮箱账号
 *   做 SMTP 认证中继，发出去的信在 SPF/DKIM 上都是合规的。
 *
 * 凭据不在这个文件里，也不进仓库 —— 见同目录 contact-config.example.php。
 *
 * 部署见 server/README.md。
 */

// 目标运行环境：PHP 7.4+（宝塔上常见 7.4 / 8.0 / 8.2，都能跑）
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function fail(int $code, string $msg) {
    http_response_code($code);
    // 不回显用户输入 —— 避免把提交内容反射回页面
    echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}
function ok() {
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') fail(405, 'method_not_allowed');

$cfgPath = __DIR__ . '/contact-config.php';
if (!is_file($cfgPath)) fail(500, 'not_configured');
$cfg = require $cfgPath;

/* ---------- 取值与校验 ---------- */

$get = static function (string $k, int $max): string {
    $v = $_POST[$k] ?? '';
    if (!is_string($v)) return '';
    $v = trim($v);
    // 去掉控制字符，顺便挡住 header 注入
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '';
    return mb_substr($v, 0, $max, 'UTF-8');
};

// 蜜罐：真人看不见这个字段，机器人会填。有值就当成功返回，不告诉它被识破了。
if ($get('company', 100) !== '') ok();

$name    = $get('name', 100);
$email   = $get('email', 200);
$phone   = $get('phone', 60);
$message = $get('message', 4000);
$clinic  = $get('clinic', 40);   // 网站表单上的「选择门店」，不是必填
$lang    = $get('lang', 8);
$page    = $get('page', 120);

if ($name === '' || $email === '' || $message === '')    fail(422, 'missing_required');
if (!filter_var($email, FILTER_VALIDATE_EMAIL))          fail(422, 'bad_email');
if (mb_strlen($name, 'UTF-8') < 1)                       fail(422, 'missing_required');

/* ---------- 限流：同一 IP 每 10 分钟最多 5 次 ---------- */

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$ip = trim(explode(',', $ip)[0]);
$dir = $cfg['rate_dir'] ?? sys_get_temp_dir();
@mkdir($dir, 0700, true);
$bucket = $dir . '/cc_' . hash('sha256', $ip) . '.txt';
$now = time();
$hits = is_file($bucket) ? array_filter(array_map('intval', explode(',', (string) @file_get_contents($bucket))), static fn($t) => $t > $now - 600) : [];
if (count($hits) >= 5) fail(429, 'too_many');
$hits[] = $now;
@file_put_contents($bucket, implode(',', $hits), LOCK_EX);

/* ---------- 收件人：按门店分流（可选），否则用默认收件人 ----------
 * $cfg['to_by_clinic'] 是一张「门店名 => 收件邮箱」的表，诊所如果要按门店
 * 分流就在配置里填这张表；不填就所有门店都发到 $cfg['to']。
 * 门店名要跟前端 <option value> 里的值完全一致（区分大小写）。
 */
$toByClinic = $cfg['to_by_clinic'] ?? [];
$to = ($clinic !== '' && isset($toByClinic[$clinic])) ? $toByClinic[$clinic] : $cfg['to'];
if (!filter_var($to, FILTER_VALIDATE_EMAIL)) fail(500, 'bad_to');

/* ---------- 组装邮件 ---------- */

$subject = sprintf('[网站预约] %s%s', $name, $clinic !== '' ? ' · ' . $clinic : '');

$lines = [
    '来自 cwtcm.ca 的联系表单',
    '',
    '姓名：' . $name,
    '邮箱：' . $email,
    '电话：' . ($phone !== '' ? $phone : '（未填）'),
    '门店：' . ($clinic !== '' ? $clinic : '（未选择）'),
    '',
    '留言：',
    $message,
    '',
    str_repeat('-', 40),
    '提交页面：' . ($page !== '' ? '/' . $page : '（未知）'),
    '语言版本：' . ($lang !== '' ? $lang : '未知'),
    '提交时间：' . date('Y-m-d H:i:s T'),
    '来源 IP：' . $ip,
];
$body = implode("\r\n", $lines);

// 发件地址就是 SMTP 认证账号 —— 两者必须同域，否则 SPF/DKIM 对不上。
// 写成两个变量是为了让下面这条检查有意义，别改成手填 From。
$from = $cfg['smtp_user'];
if (strpos($from, '@') === false) fail(500, 'bad_from');

$headers = [
    'From: ' . mimeWord($cfg['from_name'] ?? 'Canadian Western TCM Website') . ' <' . $from . '>',
    'To: <' . $to . '>',
    // 直接回复就是回给访客本人
    'Reply-To: ' . mimeWord($name) . ' <' . $email . '>',
    'Subject: ' . mimeWord($subject),
    'Date: ' . date('r'),
    // 跟随发件域 —— 发件人是诊所选定的那个邮箱
    'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . substr(strrchr($from, '@'), 1) . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
];

$data = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($body), 76, "\r\n");

try {
    smtpSend($cfg, $from, $to, $data);
} catch (Throwable $e) {
    error_log('[contact] ' . $e->getMessage());
    fail(502, 'send_failed');
}
ok();

/* ---------- 工具 ---------- */

/** 中文主题 / 显示名必须 MIME 编码，否则收件端会看到乱码。 */
function mimeWord(string $s): string {
    return preg_match('/[^\x20-\x7E]/', $s)
        ? '=?UTF-8?B?' . base64_encode($s) . '?='
        : '"' . str_replace('"', '', $s) . '"';
}

/**
 * 最小可用的 SMTP over STARTTLS 客户端。
 * 不引第三方库 —— 这台机器上只跑这一个接口，装 composer 依赖不划算，
 * 而且依赖越少，同事将来排查越省事。
 */
function smtpSend(array $cfg, string $from, string $to, string $data): void {
    $host = $cfg['smtp_host'];
    $port = (int) $cfg['smtp_port'];

    $fp = @stream_socket_client("tcp://{$host}:{$port}", $errno, $errstr, 15);
    if (!$fp) throw new RuntimeException("connect failed: {$errstr} ({$errno})");
    stream_set_timeout($fp, 15);

    $read = static function () use ($fp): string {
        $out = '';
        while (($line = fgets($fp, 1024)) !== false) {
            $out .= $line;
            // 多行响应的最后一行是「250 」而不是「250-」
            if (strlen($line) >= 4 && $line[3] === ' ') break;
        }
        return $out;
    };
    $expect = static function (string $res, string $code, string $step): void {
        if (strncmp($res, $code, strlen($code)) !== 0) {
            throw new RuntimeException("{$step}: expected {$code}, got " . trim(substr($res, 0, 120)));
        }
    };
    $cmd = static function (string $line) use ($fp, $read): string {
        fwrite($fp, $line . "\r\n");
        return $read();
    };

    $helo = substr(strrchr($from, '@'), 1) ?: 'localhost';
    $expect($read(), '220', 'greeting');
    $expect($cmd('EHLO ' . $helo), '250', 'ehlo');
    $expect($cmd('STARTTLS'), '220', 'starttls');
    if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
        throw new RuntimeException('tls handshake failed');
    }
    $expect($cmd('EHLO ' . $helo), '250', 'ehlo2');
    $expect($cmd('AUTH LOGIN'), '334', 'auth');
    $expect($cmd(base64_encode($cfg['smtp_user'])), '334', 'auth user');
    // Google 的应用专用密码是「abcd efgh ijkl mnop」这样四组显示的，
    // 复制粘贴几乎一定会带上空格。原样发过去就是 535 认证失败，
    // 而且报错信息只说密码不对，很难想到是空格。这里统一去掉所有空白。
    $pass = preg_replace('/\s+/', '', (string) $cfg['smtp_pass']);
    if ($pass === '') fail(500, 'smtp_pass_empty');
    $expect($cmd(base64_encode($pass)), '235', 'auth pass');
    $expect($cmd("MAIL FROM:<{$from}>"), '250', 'mail from');
    $expect($cmd("RCPT TO:<{$to}>"), '250', 'rcpt to');
    $expect($cmd('DATA'), '354', 'data');

    // 正文是 base64，不含裸行首的点，dot-stuffing 这里不会触发，仍按规范补一层
    fwrite($fp, preg_replace('/^\./m', '..', $data) . "\r\n.\r\n");
    $expect($read(), '250', 'body');
    $cmd('QUIT');
    fclose($fp);
}
