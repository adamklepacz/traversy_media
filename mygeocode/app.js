
function getCode() {
	var location = 'Wrocław mosiężna';
	axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
		params: {
			address: location,
			key: 'AIzaSyDa3gewZPWHxLWMl1uRJlIZlg4WPXG6UUo'
		}
	})
	.then(function(response) {
		//log for response
		console.log(response);
		
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
		
		//Output to app
		document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
		document.getElementById('address-components-tab').innerHTML = addressComponentsOutput;
		console.log(addressComponents[1]);
	})
	.catch(function(error) {
		console.log(error);
	});
}


//call geCode
getCode();