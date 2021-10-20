const elTrafficLight = document.querySelector('.tarffic-light');
const elRed = document.querySelector('.red-circle');
const elYellow = document.querySelector('.yellow-circle');
const elGreen = document.querySelector('.green-circle');
const elImg = document.querySelector('.tarffic-light-img');

function startTrafficLight() {
	setTimeout(() => {
		elRed.style.backgroundColor = 'red'
		elImg.classList.remove('image');
	}, 1000);

	setTimeout(() => {
		elRed.style.backgroundColor = 'white'
	}, 3500);

	setTimeout(() => {
		elYellow.style.backgroundColor = 'yellow'
	}, 3500);

	setTimeout(() => {
		elYellow.style.backgroundColor = 'white'
	}, 4000);

	setTimeout(() => {
		elYellow.style.backgroundColor = 'yellow'
	}, 4500);

	setTimeout(() => {
		elYellow.style.backgroundColor = 'white'
	}, 5000);

	setTimeout(() => {
		elYellow.style.backgroundColor = 'yellow'
	}, 5500);

	setTimeout(() => {
		elYellow.style.backgroundColor = 'white'
	}, 6000);

	setTimeout(() => {
		elGreen.style.backgroundColor = 'green'
	}, 6500);


	setTimeout(() => {
		elImg.classList.add('image');
	}, 7000);

	setTimeout(() => {
		elGreen.style.backgroundColor = 'white'
	}, 9000);

	setTimeout(() => {
		elGreen.style.backgroundColor = 'green'
	}, 9500);

	setTimeout(() => {
		elGreen.style.backgroundColor = 'white'
	}, 10000);

}

startTrafficLight();

 setInterval(() => {
	startTrafficLight();
}, 10000);
