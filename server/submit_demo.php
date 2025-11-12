<?php
// Ensure php.ini has: upload_max_filesize=300M, post_max_size=310M, max_execution_time=120
$recipient = 'blisssoundrecords@gmail.com';
$from_email = 'hello@blisssoundrecords.com';
$upload_dir = __DIR__ . '/uploads';
$base_url = (isset($_SERVER['HTTPS']) ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'];
$uploads_url = $base_url . dirname($_SERVER['PHP_SELF']) . '/uploads';

if (!is_dir($upload_dir)) {
  mkdir($upload_dir, 0755, true);
}

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$artist = trim($_POST['artist'] ?? '');
$email = trim($_POST['email'] ?? '');
$country = trim($_POST['country'] ?? '');
$links = trim($_POST['links'] ?? '');
$notes = trim($_POST['notes'] ?? '');
$consent = isset($_POST['consent']);

if (!$artist || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$consent) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Validation failed']);
  exit;
}

$uploaded_link = '';
if (!empty($_FILES['file']['name'])) {
  $file = $_FILES['file'];
  if ($file['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Upload error']);
    exit;
  }

  $allowed_types = ['audio/wav', 'audio/x-wav'];
  $mime = mime_content_type($file['tmp_name']);
  if (!in_array($mime, $allowed_types, true)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Only WAV files accepted']);
    exit;
  }

  if ($file['size'] > 300 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'File too large']);
    exit;
  }

  $ext = '.wav';
  $safeArtist = preg_replace('/[^a-z0-9]+/i', '-', strtolower($artist));
  $filename = date('Ymd-His') . '-' . $safeArtist . $ext;
  $dest = $upload_dir . '/' . $filename;
  if (!move_uploaded_file($file['tmp_name'], $dest)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Unable to save file']);
    exit;
  }
  $uploaded_link = $uploads_url . '/' . $filename;
}

$subject = 'New BSR Demo Submission: ' . $artist;
$bodyAdmin = "
  <h2 style='font-family:Montserrat,sans-serif'>New Demo Submission</h2>
  <p><b>Artist:</b> {$artist}</p>
  <p><b>Email:</b> {$email}</p>
  <p><b>Country:</b> {$country}</p>
  <p><b>Links:</b> " . nl2br(htmlentities($links)) . "</p>
  <p><b>Notes:</b> " . nl2br(htmlentities($notes)) . "</p>
  " . ($uploaded_link ? "<p><b>Uploaded WAV:</b> <a href='{$uploaded_link}'>{$uploaded_link}</a></p>" : "<p><b>Uploaded WAV:</b> none</p>") . "
  <hr><p>Sent automatically by BSR Submissions.</p>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: Bliss Sound Records <{$from_email}>\r\n";
@mail($recipient, $subject, $bodyAdmin, $headers);

$subjectUser = "Thanks for your demo, {$artist} — Bliss Sound Records";
$bodyUser = "
  <div style='font-family:Montserrat,Arial,sans-serif; color:#0b0b0b'>
    <div style='border:1px solid #eee; border-radius:16px; padding:24px; background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,255,255,.7));'>
      <h2 style='margin:0 0 12px 0;'>Thanks for sending your music</h2>
      <p>We’ve received your submission and our A&R team will review it. If it’s a fit for Bliss Sound Records, we’ll reach out.</p>
      " . ($uploaded_link ? "<p><b>File received:</b> <a href='{$uploaded_link}'>Download WAV</a></p>" : '') . "
      <p><b>Links you shared:</b><br/>" . nl2br(htmlentities($links)) . "</p>
      <p style='margin-top:16px'>— Team BSR</p>
    </div>
  </div>
";
@mail($email, $subjectUser, $bodyUser, $headers);

echo json_encode(['ok' => true]);
