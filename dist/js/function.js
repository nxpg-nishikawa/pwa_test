/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _import_top_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);





var option = {
	SP_WIDTH: 768, PC_WIDTH: 1200, UA: 'pc',

	SMOOTH: {
		TRIGGER: "a[href^='#']",
		FIXED: "header.is-global",
		DURATION: 500,
		DELAY: 0,
		EASE: "easeOutQuint",
		OFFSET: 0,
		VERTICAL: true,
		HORIZON: false,
		STOP: true
	},

	SP_TELL_TRIGGER: ".is-tel",

	FIXED_IMAGE_TEXT_TRIGGER: ".is-textFixed",

	MATCH_HEIGHT: ".is-matchHeight",

	MOVIE: {
		TRIGGER: "#movie",
		ID: "QXPpUrwGwks"
	},

	SLIDER: {
		TRIGGER: ".c-sliderBlock",
		OPTION: {
			autoplay: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 800,
			dots: false,
			arrows: false,
			//variableWidth: true,
			//centerMode: true,
			infinite: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					centerMode: false
				}
			}]
		}
	},
	INVIEW: {
		TRIGGER: ".is-inview",
		ONE: ".is-inview-one",
		HOOK: 0.8
	},
	GRAPH_OP: {
		TARGET: "graph",
		TYPE: 'doughnut',
		WIDTH: '50',
		HEIGHT: '50',
		DATA: {
			labels: ['01', '02', '03'],
			datasets: [{
				data: [62, 33, 5],
				backgroundColor: ['#ffba00', '#ffd800', '#fff100']
			}]
		},
		OPTIONS: {
			responsive: true,
			cutoutPercentage: 60,
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			}
		},
		DURATION: 750
	}
};

var init = function init() {
	//UA判定
	var uaSet = __webpack_require__(8).default;
	var UA = new uaSet();
	option.UA = UA.dvType();

	Object(_import_common_js__WEBPACK_IMPORTED_MODULE_0__["comSet"])(option);
	Object(_import_top_js__WEBPACK_IMPORTED_MODULE_1__["topSet"])(option);
};
init();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comSet", function() { return comSet; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* レイアウト
--------------------------------------------------------------- */

//画像固定サイズ+画像+テキスト 横並び
var imageTextSet = __webpack_require__(2).default;
//高さそろえる
var matchHeightSet = __webpack_require__(3).default;
//スムーススクロール
var smoothScrollSet = __webpack_require__(4).default;
//外部リンク位置
var outerHashLinkPos = __webpack_require__(5).default;

//inview
var inviewSet = __webpack_require__(6);
function inviewFunc(op) {
	inviewSet.inviewOne(op);
}

/* 固有
--------------------------------------------------------------- */

/* init
--------------------------------------------------------------- */

var initSet = function () {
	function initSet() {
		_classCallCheck(this, initSet);
	}

	_createClass(initSet, [{
		key: 'DOMReadBefore',
		value: function DOMReadBefore(op) {
			smoothScrollSet(op.SMOOTH);
		}
	}, {
		key: 'DOMReadAfter',
		value: function DOMReadAfter(op) {
			matchHeightSet(op.MATCH_HEIGHT);
			outerHashLinkPos(op.SMOOTH);
			inviewFunc(op);
		}
	}, {
		key: 'imageReadAfter',
		value: function imageReadAfter(op) {
			imageTextSet(op.FIXED_IMAGE_TEXT_TRIGGER);
		}
	}, {
		key: 'windowResize',
		value: function windowResize(op) {
			imageTextSet(op.FIXED_IMAGE_TEXT_TRIGGER);
		}
	}]);

	return initSet;
}();

function comSet(op) {
	var timeoutId = void 0;
	var init = new initSet();
	init.DOMReadBefore(op);
	document.addEventListener("DOMContentLoaded", function () {
		init.DOMReadAfter(op);
	}, false);
	window.addEventListener('load', function () {
		init.imageReadAfter(op);
	}, false);
	window.addEventListener("resize", function () {
		if (timeoutId) return;
		timeoutId = setTimeout(function () {
			timeoutId = 0;
			init.windowResize(op);
		}, 500);
	});
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//画像固定サイズ+画像+テキスト 横並び

/* harmony default export */ __webpack_exports__["default"] = (function (trigger) {
	var imageTarget = document.querySelectorAll(trigger);
	Array.prototype.slice.call(imageTarget).forEach(function (event) {
		event.firstElementChild.style.width = event.querySelectorAll('img').naturalWidth + 'px';
		//event.firstElementChild.style.width = event.firstElementChild.firstElementChild.clientWidth + 'px';
		event.lastElementChild.style.width = 'calc(100% - ' + event.firstElementChild.clientWidth + 'px)';
	});
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//高さそろえる

/* harmony default export */ __webpack_exports__["default"] = (function (trigger) {

	if ($(trigger).length) {
		$(trigger).matchHeight();
	}
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//スムーススクロール npm install SweetScroll

/* harmony default export */ __webpack_exports__["default"] = (function (op) {

	var smoothScroll = new SweetScroll({
		trigger: op.TRIGGER, // トリガーとなる要素をCSSセレクタで指定
		header: op.FIXED, // 固定ヘッダをCSSセレクタで指定
		duration: op.DURATION, // アニメーション再生時間のミリ秒
		delay: op.DELAY, // アニメーション開始までの遅延ミリ秒
		easing: op.EASE, // イージングのタイプ
		offset: op.OFFSET, // スクロール位置のオフセット
		verticalScroll: op.VERTICAL, // 垂直方向のスクロールを許可
		horizontalScroll: op.HORIZON, // 水平方向のスクロールを許可 (デフォルトでは無効)
		stopScroll: op.STOP, // ホイール・タッチイベントが発生した時にスクロールを停止

		// Callbacks
		beforeScroll: null, // スクロールが始まる前 (return falseでキャンセル可)
		afterScroll: null, // スクロールが終わった時
		cancelScroll: null // スクロールがキャンセルされた時
	});
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//外部リンク位置

/* harmony default export */ __webpack_exports__["default"] = (function (op) {

	if (window.location.hash) {

		var hash = document.querySelector(window.location.hash + ''),
		    rect = hash.getBoundingClientRect(),
		    offsetTop = window.pageYOffset || document.documentElement.scrollTop,
		    myTop = rect.top + offsetTop - document.querySelector(op.FIXED).clientHeight;

		setTimeout(function () {
			window.scrollTo(0, myTop);
		}, 300);
	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {


module.exports = {
	inviewOne: function inviewOne(op) {
		if ($(op.INVIEW.ONE).length) {

			$(op.INVIEW.ONE).one('inview', function (event, visible, topOrBottomOrBoth) {
				if (visible == true) {
					$(this).addClass('is-animated');
				}
			});
		}
	}
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topSet", function() { return topSet; });
function topSet(op) {

	document.addEventListener("DOMContentLoaded", function () {}, false);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//ua 判定
var _class = function () {
	function _class(op) {
		_classCallCheck(this, _class);

		this.ua = navigator.userAgent;
		this.type = 'pc';
	}

	_createClass(_class, [{
		key: 'dvType',
		value: function dvType() {
			if (this.ua.indexOf('iPhone') > 0 || this.ua.indexOf('Android') > 0 && this.ua.indexOf('Mobile') > 0) {
				// スマートフォン用コード
				this.type = 'sp';
			} else if (this.ua.indexOf('iPad') > 0 || this.ua.indexOf('Android') > 0) {
				// タブレット用コード
				this.type = 'tb';
			}
			return this.type;
		}
	}]);

	return _class;
}();

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ })
/******/ ]);