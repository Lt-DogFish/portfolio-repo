//Track button element and bind a Clicked event function
const buttons = document.querySelectorAll('.button');

function Clicked(event) {
	buttons.forEach(btn => btn.classList.remove('selected'));
	event.target.classList.add('selected');
}
buttons.forEach(btn => { btn.addEventListener('click', Clicked); });


//Index elements exclusive highlighting and dimming
const exclusiveHovers = document.querySelectorAll('.exclusive-hover');

function Hovered(event) {
	exclusiveHovers.forEach(el => el.classList.remove('highlight'));
	exclusiveHovers.forEach(el => el.classList.add('dimmer'));
	event.target.classList.add('highlight');
	event.target.classList.remove('dimmer');
}
function ResetHover() {
	exclusiveHovers.forEach(el => el.classList.add('highlight'));
	exclusiveHovers.forEach(el => el.classList.remove('dimmer'));
}

ResetHover()
exclusiveHovers.forEach(el => { el.addEventListener('mouseenter', Hovered); });
exclusiveHovers.forEach(el => { el.addEventListener('mouseleave', ResetHover); });

//Element gravity
//const gravityElements = document.querySelectorAll('.gravity');
//
//document.addEventListener('mousemove', event => {
//	gravityElements.forEach(el => {
//		const rect = el.getBoundingClientRect();
//		const dx = (event.clientX - (rect.left + rect.width / 2)) / 50;
//		const dy = (event.clientY - (rect.top + rect.height / 2)) / 50;
//		el.style.transform = `translate(${dx}px, ${dy}px)`;
//	}); 
//});