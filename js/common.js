head.ready(function() {
	$('.js-top').click(function() {
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

	$('.js-popup-link').click(function(e) {
		e.stopPropagation();
		$('.js-popup').addClass('is-active');
	});

	$('body').click(function() {
		if ($('.js-popup').hasClass('is-active')) {
			$('.js-popup').removeClass('is-active');
		}
	});

	$('.popup').click(function(e) {
		e.stopPropagation();
	});
});

