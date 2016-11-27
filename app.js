$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		var width = $(window).width()
		
		if (width >= '880px') {
			$('.small-links').hide()
		}
})

	$('.sausage').click(function () {
	$('.small-links').slideToggle(1000);

})	
	})

$(document).ready(function () {
	$(window).scroll(function () {
	var offset = $(window).scrollTop();
	if (offset > 150){
			$('header').addClass('header-offset')
		} else {
			$('header').removeClass('header-offset')
		}
	})
})