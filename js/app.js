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

	var map;

      function initMap() {

      	// google.maps.Map(element, options)

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.785091, lng: -73.968285},
          zoom: 11
        });
	
	var marker = new google.maps.Marker({
	  position: {lat: 40.785091, lng: -73.968285},
	  map: map,
	  title: 'Central Park, New York, NY'
	});

	var theMet = new google.maps.Marker({
	  position: {lat: 40.779473, lng: -73.962536},
	  map: map,
	  title: 'The Met, NY'
	});
}

	
// Turn on maps:

initMap();
})

$(document).ready(function () {
	$('.grid').masonry({
  // options
  	itemSelector: '.grid-item',
  	columnWidth: 426
});

	var $grid = $('.grid')

	$grid.on( 'click', '.grid-item', function() {
  // remove clicked element
  	$grid.masonry( 'remove', this )
    // layout remaining item elements
    .masonry('layout');
});
})