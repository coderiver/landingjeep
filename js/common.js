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

	// form
	(function () {
		var popup = $('.js-popup');
		// welcome
		$.validate({
			form : '#form-welcome',
			onSuccess: function() {
				post_data = {
					'surname': $('#form-welcome input[name=surname]').val(),
					'name': $('#form-welcome input[name=name]').val(),
					'email': $('#form-welcome input[name=email]').val(),
					'phone': $('#form-welcome input[name=phone]').val()
				};
				// Ajax post data to server
				$.post('send.php', post_data, function(response) {
					if (response.type == 'error') {
						console.log('error');
					}
					else {
						// reset values in all input fields
						popup.fadeOut();
						$('#form-welcome').get(0).reset();
						window.location.href = 'thanks.html';
					}
				}, 'json');
				// localstorage
				if (typeof(Storage) !== 'undefined') {
					// Store
					localStorage.setItem('validate', 'yes');
				} else {
					// Sorry! No Web Storage support..
				}
				return false;
			}
		});
	}());
});


