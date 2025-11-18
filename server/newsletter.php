<?php
$recipient = 'blisssoundrecords@gmail.com';
$ccRecipient = 'hello@blisssoundrecords.com';
$fromAddress = 'hello@blisssoundrecords.com';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$email = trim($_POST['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Valid email required']);
  exit;
}

$subject = 'Newsletter opt-in';
$body = "<p><strong>Email:</strong> {$email}</p><p>Opted into the Bliss Sound Records signal via the website.</p>";
$adminHeaders = "MIME-Version: 1.0\r\n";
$adminHeaders .= "Content-type:text/html;charset=UTF-8\r\n";
$adminHeaders .= "From: Bliss Sound Records <{$fromAddress}>\r\n";
$adminHeaders .= "Cc: {$ccRecipient}\r\n";

if (!mail($recipient, $subject, $body, $adminHeaders)) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Unable to save']);
  exit;
}

$userSubject = 'Thanks for joining the Bliss Sound signal';
$userBody = "<p>We just added {$email} to the monthly signal. Expect premieres, press, and show news soon.</p>";
$userHeaders = "MIME-Version: 1.0\r\n";
$userHeaders .= "Content-type:text/html;charset=UTF-8\r\n";
$userHeaders .= "From: Bliss Sound Records <{$fromAddress}>\r\n";
mail($email, $userSubject, $userBody, $userHeaders);

echo json_encode(['ok' => true]);
