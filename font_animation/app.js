//brake chain animation
function brakeChain() {
	let chain = document.getElementById('chain');
	chain.innerHTML = "&#xf0c1;";
	
	setTimeout(function() {
		chain.innerHTML = "&#xf127;";
	}, 1000);
}

//call animation
brakeChain();

//animate every 2 seconds
setInterval(brakeChain, 2000);


//battery charge animation
function chargeBattery() {
	let battery = document.getElementById('battery');
	
	battery.innerHTML = "&#xf244;";
	
	setTimeout(function() {
		battery.innerHTML = "&#xf243;";
	},500);
	
	setTimeout(function() {
		battery.innerHTML = "&#xf242;";
	},1000);
	
	setTimeout(function() {
		battery.innerHTML = "&#xf241;";
	},1500);
	
	setTimeout(function() {
		battery.innerHTML = "&#xf240;";
	},2000);
}

//call animation
chargeBattery();
//animate every 2,5 second
setInterval(chargeBattery, 2500);


//animate hourglass
function fillHourglass() {
	let hourglasss = document.getElementById('hourglass');
	
	hourglasss.innerHTML = "&#xf251;";
	
	setTimeout(function() {
		hourglasss.innerHTML = "&#xf252;";
	},500);
	
	setTimeout(function() {
		hourglasss.innerHTML = "&#xf253;";
	},1000);
	
}

fillHourglass();

setInterval(fillHourglass, 1500);

//animate thermometere
function tempRise() {
	let thermo = document.getElementById('thermometer');
	
	thermo.innerHTML = "&#xf2cb;";
	
	setTimeout(function() {
		thermo.innerHTML = "&#xf2ca;";
	},500);
	
	
	setTimeout(function() {
		thermo.innerHTML = "&#xf2c9;";
	},1000);
	
	setTimeout(function() {
		thermo.innerHTML = "&#xf2c8;";
	},1500);
	
	setTimeout(function() {
		thermo.innerHTML = "&#xf2c7;";
	},2000);
}

tempRise();

setInterval(tempRise, 2500);