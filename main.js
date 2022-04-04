// NOTE: Need to refactor this. Make functions tidier and easier to read flow.

// NOTE: Need to add function top prepopulate board before reset button is pressed.

// grab elements from HTML doc
const body = document.querySelector('body');
const container = document.querySelector('#container-div');
const button = document.querySelector('#button');
const divs = [];

// attach onclick event to button element to trigger resetBoard()
button.onclick = function resetBoard() {
	button.value = 'Play again?';
	divs.forEach((element) => element.remove());
	divs.forEach((element) => (element.style.backgroundColor = 'white'));
	let numSquares = prompt('Choose a number from 2 to 100:');
	if (numSquares >= 2 && numSquares <= 100) {
		document.querySelector('#userChoice').innerHTML =
			'You chose ' + numSquares + ' squares per side!';
		numberOfSquares(numSquares);
	} else {
		document.querySelector('#userChoice').innerHTML =
			'Whoops! Please choose a number from 2 to 100';
		button.value = 'Try again?';
	}
};

// random rgba value generator
function random_rgba() {
	var o = Math.round,
		r = Math.random,
		s = 255;
	return (
		'rgba(' +
		o(r() * s) +
		',' +
		o(r() * s) +
		',' +
		o(r() * s) +
		',' +
		r().toFixed(1) +
		')'
	);
}

// function to choose how many squares are required.
function numberOfSquares(num) {
	let grid = num * num;
	for (let i = 0; i < grid; i++) {
		const div = document.createElement('div');
		div.id = 'whiteBox';
		div.addEventListener('mouseover', function (event) {
			// highlight the mouseenter target
			event.target.style.backgroundColor = random_rgba();
		});
		container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
		container.appendChild(div);
		divs.push(div);
		// style.setProperty(propertyName, value, priority);
	}
}
