//外部リンク位置

export default function(op) {

	if(window.location.hash){

		let hash = document.querySelector(window.location.hash + ''),
			rect = hash.getBoundingClientRect(),
			offsetTop = window.pageYOffset || document.documentElement.scrollTop,
			myTop = rect.top + offsetTop - document.querySelector(op.FIXED).clientHeight;

		setTimeout(function () {
			window.scrollTo(0, myTop);
		}, 300);
	}

}