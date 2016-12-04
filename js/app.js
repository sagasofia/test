$(document).ready(function () {
	$(window).resize(function () {
		var width = $(window).width()
		
		if (width >= 880) {
			$('.small-links').hide()
		}
	})

	$('.sausage').click(function () {
		$('.small-links').slideToggle(1000);
	})

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
	  position: {lat: 40.729474, lng: -74.006049},
	  map: map,
	  title: 'West Village, New York, NY'
	});

	var theMet = new google.maps.Marker({
	  position: {lat: 40.722702, lng: -73.952253},
	  map: map,
	  title: 'Greenpoint, NY'
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
