$(document).ready(function(){
 
	$('.slider__buyout.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
		nav:true,
		rewind:true,
		center:false,
		mouseDrag: true,
		navText: ["<img src='./img/arrow-left.png'>","<img src='./img/arrow.png'>"],
    responsive:{
        0:{
						items:1,
						stagePadding: 90,
						margin:30,
						center:true
        },
        600:{
						items:2,
						nav:false
        },
        800:{
            items:2,
						nav:false
        },
        1000:{
						items:2,
						nav:false
        },
        1140:{
						items:4,
						nav:false
        }
    }
});
 
	$('.slider__prof.owl-carousel').owlCarousel({
    margin:10,
		nav:false,
		rewind:true,
		mouseDrag: true,
    responsive:{
        0:{
						items:1,
						stagePadding: 90,
						margin:30,
						center:true,
						loop: true
        },
        600:{
						items:2,
						center:true,
						loop: true
        },
        800:{
					items:2,
					center:true,
					loop: true
        },
        1000:{
					items:2,
					center:true,
					loop: true
        },
        1140:{
						items:4,
        }
		}
});
 
	$('.slider__reviews.owl-carousel').owlCarousel({
    margin:50,
		nav:true,
		navText: ["<",">"],
		rewind:true,
		mouseDrag: true,
    responsive:{
        0:{
						items:1,
						margin:30
        },
        600:{
						items:1,
        },
        800:{
					items:1,
        },
        1000:{
					items:2,
        },
        1140:{
						items:2,
        }
		}
});


	var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.owl-item').click(function() {
			owl.trigger('next.owl.carousel');
	})

	
});



	function initMap() {
		var o = {
				lat: 55.749493,
				lng: 37.589812
		}, 
		e = new google.maps.Map(document.getElementById("map"),{
				zoom: 18,
				center: o,
				styles: 
	[ { "featureType": "water", "stylers":[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
] 
}]			
});

		new google.maps.Marker({
				position: o,
				map: e,
				draggable: !0,
				animation: google.maps.Animation.DROP,
				position: {
						lat: 55.749493,
						lng: 37.589812
				},
				title: "Ломбард32",
		})

};