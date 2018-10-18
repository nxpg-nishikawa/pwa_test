//スマホのときだけ電話番号用リンク

export default function(op) {
	let	linkTarget = document.querySelectorAll(op.SP_TELL_TRIGGER);
	if(op.UA == 'pc'){
		Array.prototype.slice.call(linkTarget).forEach(function(event) {
			event.outerHTML = event.innerHTML
		});
	}
}