<?php
// Contact endpoint: handles general enquiries and routes mailthrough to the Bliss Sound team.
// Keep this script outside /public to prevent direct access; deploy alongside submit_demo.php.

$primaryRecipient = 'blisssoundrecords@gmail.com';
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
$topic = trim($_POST['topic'] ?? 'General');
$message = trim($_POST['message'] ?? '');

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Validation failed']);
  exit;
}

$subject = "New contact: {$name} — {$topic}";
$body = "
  <h2 style='font-family:Montserrat,Arial,sans-serif;'>New Contact Message</h2>
  <p><strong>Name:</strong> {$name}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Topic:</strong> {$topic}</p>
  <p><strong>Message:</strong><br>" . nl2br(htmlentities($message)) . "</p>
  <hr>
  <p style='color:#7c7c7c;'>Sent automatically from blisssoundrecords.com/contact.php</p>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: Bliss Sound Records <{$fromAddress}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Cc: {$ccRecipient}\r\n";

if (!mail($primaryRecipient, $subject, $body, $headers)) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Unable to send'] );
  exit;
}

$userSubject = 'Thanks for reaching Bliss Sound Records';
$userBody = "
  <div style='font-family:Montserrat,Arial,sans-serif;color:#0b0b0b;'>
    <div style='border:1px solid #e0e7ff;border-radius:20px;padding:24px;background:#ffffff;'>
      <h2 style='margin-top:0;'>We got your note</h2>
      <p>Hi {$name}, thanks for writing in about {$topic}. We route all contact to the closest team member and aim to respond soon.</p>
      <p style='margin-top:24px;'>— Team Bliss Sound</p>
    </div>
  </div>
";
$userHeaders = "MIME-Version: 1.0\r\n";
$userHeaders .= "Content-type:text/html;charset=UTF-8\r\n";
$userHeaders .= "From: Bliss Sound Records <{$fromAddress}>\r\n";
mail($email, $userSubject, $userBody, $userHeaders);

echo json_encode(['ok' => true, 'redirect' => '/ThankYouForConnecting.html']);
