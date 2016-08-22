<?php

$destination = 'http://to.ttk.elte.hu/test.php';

$ch = curl_init($destination);
$data_str = file_get_contents('php://input');

curl_setopt($ch, CURLOPT_URL, $destination);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_str);

$output = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

http_response_code($statusCode);
echo($output);
