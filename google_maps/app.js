function initMap() {
	//map options
	var options = {
		zoom: 6,
		center: {lat: 51.1, lng: 17.03333}
	};
	
	//new map
	var map = new google.maps.Map(document.getElementById('map'), options);
	
	google.maps.event.addListener(map, 'click', function(e) {
		//add marker
		addMarker({coords: e.latLng});
	});
	
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
		iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
		content: '<h1>Siedlikow</h1>'
	});
	addMarker({coords:	{lat: 51.4784294, lng:	17.9618529}});
	addMarker({coords:	{lat: 51.4784294, lng:	17.9618549}});
	//add marker from input
	function addMarker(props) {
		marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			//icon:	props.iconImage
  	});
		
		if(props.iconImage) {
			marker.setIcon(props.iconImage);
		}
		
		var infoWindow = new google.maps.InfoWindow({
			content: props.content
		});
	
		marker.addListener('click', function() {
			if(props.content) {
				infoWindow.open(map, marker);
			}
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


