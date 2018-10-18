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