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

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$city = trim($_POST['city'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Validation failed']);
  exit;
}

$subject = 'Host request — ' . $name;
$body = "
  <h2 style='font-family:Montserrat,Arial,sans-serif;'>Host request</h2>
  <p><strong>Name:</strong> {$name}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>City / Venue:</strong> " . ($city ? htmlentities($city) : 'Not provided') . "</p>
  <p><strong>Message:</strong><br>" . nl2br(htmlentities($message)) . "</p>
  <hr><p style='color:#7c7c7c;'>This note was sent from blisssoundrecords.com/events.</p>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: Bliss Sound Records <{$fromAddress}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Cc: {$ccRecipient}\r\n";

if (!mail($recipient, $subject, $body, $headers)) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Unable to send']);
  exit;
}

echo json_encode(['ok' => true, 'message' => 'Thanks — we received your host request.']);
