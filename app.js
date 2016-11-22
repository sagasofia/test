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
