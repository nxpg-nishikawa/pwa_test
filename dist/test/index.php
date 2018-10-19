/*----------------------------------------------------------------------------------------------------
	設定情報
----------------------------------------------------------------------------------------------------*/

// サーバキー
$key = 'AIzaSyDWkkzFmeI86ermrInUFuh4zl1Wl3O7LK0';

// API
$api_url = 'https://fcm.googleapis.com/fcm/send';



/*----------------------------------------------------------------------------------------------------
	POSTから情報を取得
----------------------------------------------------------------------------------------------------*/

// 変数宣言
$token = '';

// トークンを取得
if (isset($_POST['token'])){ $token = $_POST['token']; }

echo "取得したトークン : {$token}";



/*----------------------------------------------------------------------------------------------------
	APIに送信
----------------------------------------------------------------------------------------------------*/

// データ
$data = [
	'to' => $token,
	'notification' => [
		'title' => 'タイトル',
		'body' => '本文',
		'icon' => 'アイコンの画像',
		'click_action' => '飛び先のURL'
	]
];

// ヘッダー
$header = [
	'Authorization: key='.$key,
	'Content-Type: application/json'
];

// cURLでAPIをたたく
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $api_url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, true);
$response = curl_exec($curl);
$header_size = curl_getinfo($curl, CURLINFO_HEADER_SIZE);
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);
$result = json_decode($body, true);
curl_close($curl);

?>