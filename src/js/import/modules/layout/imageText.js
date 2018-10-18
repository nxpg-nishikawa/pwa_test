//画像固定サイズ+画像+テキスト 横並び

export default function(trigger) {
	let imageTarget = document.querySelectorAll(trigger);
	Array.prototype.slice.call(imageTarget).forEach(function(event) {
		event.firstElementChild.style.width = event.querySelectorAll('img').naturalWidth + 'px';
		//event.firstElementChild.style.width = event.firstElementChild.firstElementChild.clientWidth + 'px';
		event.lastElementChild.style.width = 'calc(100% - ' + event.firstElementChild.clientWidth + 'px)';
	});
}