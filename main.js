// NOTE: Need to refactor this. Make functions tidier and easier to read flow.

// grab elements from HTML doc
const body = document.querySelector('body');
const container = document.querySelector('#container-div');
const button = document.querySelector('#button');
const divs = [];

// attach onclick event to button element to trigger resetBoard()
button.onclick = function resetBoard() {
	divs.forEach((element) => element.remove());
	divs.forEach((element) => (element.style.backgroundColor = 'white'));
	let numSquares = prompt(
		'Choose number of squares per side on board:',
		'(example: 50)'
	);
	if (numSquares >= 2 && numSquares <= 50) {
		document.querySelector('#userChoice').innerHTML =
			'You chose ' + numSquares + ' squares per side!';
		numberOfSquares(numSquares);
	} else {
		console.log('Sorry, your number is not within range.');
	}
};

// function to choose how many squares are required.
function numberOfSquares(num) {
	let grid = num * num;
	for (let i = 0; i < grid; i++) {
		const div = document.createElement('div');
		div.id = 'whiteBox';
		div.addEventListener('mouseover', function (event) {
			// highlight the mouseenter target
			event.target.style.backgroundColor = 'black';
		});
		container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
		container.appendChild(div);
		divs.push(div);
		// style.setProperty(propertyName, value, priority);
	}
}
