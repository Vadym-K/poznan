var markersData = [{
	lat: 52.42719999,
	lng: 16.93710111,
	name: "Hey there",
	address: "adress"
}];


var map, infoWindow;

function initMap() {
	var centerLatLng = new google.maps.LatLng(52.42765752, 16.95549407);
	var mapOptions = {
		center: centerLatLng,
		styles: [{
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"hue": "000"
			}, {
				"saturation": 55
			}, {
				"lightness": -6
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels",
			"stylers": [{
				"hue": "#000"
			}, {
				"saturation": 55
			}, {
				"lightness": -6
			}, {
				"visibility": "off"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "all",
			"stylers": [{
				"hue": "000"
			}, {
				"saturation": -70
			}, {
				"lightness": 20
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"hue": "grey"
			}, {
				"saturation": -100
			}, {
				"lightness": 40
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "labels",
			"stylers": [{
				"hue": "#ffffff"
			}, {
				"saturation": -100
			}, {
				"lightness": 100
			}, {
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"hue": "red"
			}, {
				"saturation": -10
			}, {
				"lightness": 10
			}, {
				"visibility": "on"
			}]
			// }, {
			// 	"featureType": "road",
			// 	"elementType": "labels",
			// 	"stylers": [{
			// 		"hue": "#000"
			// 	}, {
			// 		"saturation": -70
			// 	}, {
			// 		"lightness": -10
			// 	}, {
			// 		"visibility": "on"
			// 	}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#ffcc00"
			}, {
				"saturation": 100
			}, {
				"lightness": -20
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#ffcc00"
			}, {
				"saturation": 100
			}, {
				"lightness": -2
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "poi.school",
			"elementType": "all",
			"stylers": [{
				"hue": "#d7e4e4"
			}, {
				"saturation": -100
			}, {
				"lightness": 50
			}, {
				"visibility": "on"
			}]
		}],
		zoom: 13
	};
	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	infoWindow = new google.maps.InfoWindow();
	google.maps.event.addListener(map, "click", function() {
		// infoWindow.close - закрываем информационное окно.
		infoWindow.close();
	});

	for (var i = 0; i < markersData.length; i++) {
		var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
		var name = markersData[i].name;
		var address = markersData[i].address;

		addMarker(latLng, name, address);
	}
}


function addMarker(latLng, name, address) {
	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		icon: 'img/marker.png',
		title: name
	});

	google.maps.event.addListener(marker, "click", function() {
		var contentString = '<div class="infowindow">' +
			'<h3>' + name + '</h3>' +
			'<p>' + address + '</p>' +
			'</div>';
		infoWindow.setContent(contentString);
		infoWindow.open(map, marker);
	});
}

var updateTimer = function() {
	var cell = document.querySelector('#cell');
	var count = Number(cell.innerHTML);

	cell.innerHTML = count += 1;
};

var updateTimer2 = function() {
	var cell = document.querySelector('#cell2');
	var count = Number(cell.innerHTML);

	cell.innerHTML = count += 1;
};

var updateTimer3 = function() {
	var cell = document.querySelector('#cell3');
	var count = Number(cell3.innerHTML);

	cell.innerHTML = count += 1;
};

let wrapper = document.querySelector('.wrapper');
let btnMenu = document.querySelector('.btn-menu');

btnMenu.addEventListener('click', openMenu);

function openMenu() {
	wrapper.classList.toggle('active');
}