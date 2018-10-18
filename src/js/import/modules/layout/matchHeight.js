//高さそろえる

export default function(trigger) {
	
	if($(trigger).length) {
		$(trigger).matchHeight();
	}
}