function initMap() {
	//map options
	var options = {
		zoom: 6,
		center: {lat: 51.1, lng: 17.03333}
	};
	
	//new map
	var map = new google.maps.Map(document.getElementById('map'), options);
	
	
	/*
	var markerPoint =  {lat: 51.1105849, lng:	17.0254199};
	//add marker to map
	marker = new google.maps.Marker({
		position: markerPoint,
		map: map,
		icon:	'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
		animation: google.maps.Animation.DROP
  });
	marker.addListener('click', toggleBounce);
	
	var infoWindow = new google.maps.InfoWindow({
		content: '<h1>Wrocław</h1>'
	});
	
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});  
	*/
	addMarker({
		coords:	{lat: 51.1105849, lng:	17.0254199},
		iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});
	addMarker({coords:	{lat: 51.4784294, lng:	17.9618529}});
	//add marker from input
	function addMarker(props) {
		marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			icon:	props.iconImage
  	});
	}
}

function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}


