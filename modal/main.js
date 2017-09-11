//get modal element
var modal = document.getElementById('simpleModal');
var btn = document.getElementById('modalBtn');
var btnClose = document.getElementById('closeBtn');

modal.style.display = "none";

//open or close modal
btn.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
//outside click
window.addEventListener('click', outsideModal);

//show modal 
function openModal() {
	console.log('Jestesmy');
	if(modal.style.display === "none") {
		modal.style.display = "block";
	}
}

//close modal
function closeModal() {
	console.log('Wychodzimy');
	if(modal.style.display === "block") {
		modal.style.display = "none";
	}
}

//close modal when they clicking outside
function outsideModal(e) {
	if(e.target.id === 'simpleModal') {
		modal.style.display = "none";
	}
}
