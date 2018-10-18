
module.exports = {
	inviewOne: (op) => {
        if($(op.INVIEW.ONE).length) {
	
			$(op.INVIEW.ONE).one('inview', function (event, visible, topOrBottomOrBoth) {
				if (visible == true) {
					$(this).addClass('is-animated');
				}
			});
		}
    }
}

