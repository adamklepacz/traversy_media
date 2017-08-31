function manageOutputDiv() {
	//get data from input
	var location = document.getElementById('location-input').value;
	
	//hide cards when input is empty
	var dataOutput = document.getElementById('data-output');
	if(location == "") {
		dataOutput.style.visibility = "hidden";
	} else {
		dataOutput.style.visibility = "visible";
	}
}

function getCode(e) {
	
	//Prevent from submiting the form
	e.preventDefault();
	
	//get data from input
	var location = document.getElementById('location-input').value;

	//use axios librart for http request
	axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
		params: {
			address: location,
			key: 'AIzaSyDa3gewZPWHxLWMl1uRJlIZlg4WPXG6UUo'
		}
	})
	.then(function(response) {
		// Formatted adress
	  var formattedAddress = response.data.results[0].formatted_address,
				formattedAddressOutput = `
			<ul class="list-group">
				<li class="list-group-item">${formattedAddress}</li>
			</ul>
		`;
		
		//Address components
		var addressComponents = response.data.results[0].address_components,
				addressComponentsOutput = '<ul class="list-group">';
		
		for(var i = 0; i < addressComponents.length; i++) {
			addressComponentsOutput += `
				<li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
			`;
		}
		
		addressComponentsOutput += '</ul>';
		
		// Formatted geolocation
	  var lat = response.data.results[0].geometry.location.lat,
				lng = response.data.results[0].geometry.location.lng,
		
				geometryOutput = `
					<ul class="list-group">
						<li class="list-group-item"><strong>Latitude:&nbsp</strong>${lat}</li>
						<li class="list-group-item"><strong>Longitude:&nbsp</strong>${lng}</li>
					</ul>
				`;
		
		//Output to app
		document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
		document.getElementById('address-components-tab').innerHTML = addressComponentsOutput;
		document.getElementById('address-geometry').innerHTML = geometryOutput;
	})
	.catch(function(error) {
		console.log(error);
	});
}


//call geCode
document.getElementById('location-form').addEventListener('submit', getCode);
document.getElementById('location-form').addEventListener('submit', manageOutputDiv);
document.getElementById('location-input').addEventListener('change', manageOutputDiv);
window.addEventListener('load', manageOutputDiv);