/* レイアウト
--------------------------------------------------------------- */

//画像固定サイズ+画像+テキスト 横並び
const imageTextSet = require('./modules/layout/imageText.js').default;
//高さそろえる
const matchHeightSet = require('./modules/layout/matchHeight.js').default;
//スムーススクロール
const smoothScrollSet = require('./modules/scroll/smoothScroll.js').default;
//外部リンク位置
const outerHashLinkPos = require('./modules/scroll/outerHashLinkPos.js').default;

//inview
const inviewSet = require('./modules/scroll/inviewSet.js');
function inviewFunc(op) {
	inviewSet.inviewOne(op);
}

/* 固有
--------------------------------------------------------------- */


/* init
--------------------------------------------------------------- */

class initSet {
	DOMReadBefore(op) {

		const messaging = firebase.messaging();

		if ('serviceWorker' in navigator) {
			// サービスワーカーの登録
			console.log("aaa");
			navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
				// サービスワーカー登録成功
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
				// 今回はこのサービスワーカーを指定します
				messaging.useServiceWorker(registration);
				// 通知の受信許可を確認する
				messaging.requestPermission()
						.then(function() {
							console.log('Notification permission granted.');
							// トークンを取得する
							messaging.getToken()
									.then(function(currentToken) {
										if (currentToken) {
											// 今回はコンソールに出力して取得します。実運用では適切な方法で保管する必要があります。
											console.log(currentToken);
										} else {
											console.log('No Instance ID token available. Request permission to generate one.');
										}
									})
									.catch(function(err) {
										console.log('An error occurred while retrieving token. ', err);
									});
						})
						.catch(function(err) {
							console.log('Unable to get permission to notify.', err);
						});
			}).catch(function(err) {
				// サービスワーカー登録失敗
				console.log('ServiceWorker registration failed: ', err);
			});
		}


		smoothScrollSet(op.SMOOTH);
	}
	DOMReadAfter(op) {
		matchHeightSet(op.MATCH_HEIGHT);
		outerHashLinkPos(op.SMOOTH);
		inviewFunc(op);
	}
	imageReadAfter(op) {
		imageTextSet(op.FIXED_IMAGE_TEXT_TRIGGER);
	}
	windowResize(op) {
		imageTextSet(op.FIXED_IMAGE_TEXT_TRIGGER);
	}
}


export function comSet(op) {
	let timeoutId;
	let init = new initSet();
	init.DOMReadBefore(op)
	document.addEventListener("DOMContentLoaded", () => {init.DOMReadAfter(op);},false);
	window.addEventListener('load', function(){init.imageReadAfter(op);},false);
	window.addEventListener("resize", function () {
		if (timeoutId) return ;
		timeoutId = setTimeout( function () {
			timeoutId = 0 ;
			init.windowResize(op);
		}, 500 ) ;
	});
}