var map;
function initMap() {
	var mapCenter = {lat: 25.048233, lng: 121.586022}
	var zoom = (viewport().width>640) ? 16 : 15;
	var myLatLng = {lat: 25.048233, lng: 121.586022};
	var mapUrl = 'https://goo.gl/maps/sjTM7KsiZdG2';

	var mapOptions = {
		zoom: zoom,
		center: mapCenter,
		mapTypeControl:false, //地圖類型控制項,
		streetViewControl:false,//街景服務控制項
		scrollwheel: false,
		styles: [
			{"featureType": "all","elementType": "labels.text.fill","stylers": [{"color": "#cccccc"}]},
			{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "off"}]},
			{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
			{"featureType": "administrative","elementType": "geometry.fill", "stylers": [{"color": "#000000"},{"lightness": "13"}]},
			{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 17},{"weight": 1.2}]},
			{"featureType": "administrative","elementType": "labels","stylers": [{"visibility": "off"}]},
			{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": "35"}]},
			{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": "30"}]},
			{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": "55"}]},
			{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},
			{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": "45"}]},
			{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},
			{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": "40"},{"weight": "1"}]},
			{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#999999"}]},
			{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": "30"}]},
			{"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 25}]}
		]
	}

	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	var marker = new google.maps.Marker({
		position : myLatLng,
		map: map,
		title: '凱軒有限公司',
		icon: 'images/label.png',
		url: mapUrl
	});

	marker.addListener('click', function() {
		var mapurl=this.url;
		window.open(mapurl,'_blank'); 
	});

}