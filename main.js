// grab elements from HTML doc
const body = document.querySelector('body');
const container = document.querySelector('#container-div');
const button = document.querySelector('#button');

// loop to produce 256 (16 x 16) small divs
const divs = [];
for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	div.id = 'whiteBox';
	container.appendChild(div);
	divs.push(div);
}
divs.forEach((element) =>
	element.addEventListener('mouseover', function (event) {
		// highlight the mouseenter target
		event.target.style.backgroundColor = 'black';
	})
);

// attach onclick event to button element to trigger resetBoard()
button.onclick = function resetBoard() {
	divs.forEach((element) => (element.style.backgroundColor = 'white'));
	let numSquares = prompt(
		'Choose number of squares per side on board:',
		'(example: 50)'
	);
	if (numSquares != null) {
		document.querySelector('#userChoice').innerHTML =
			'You chose ' + numSquares + ' squares per side!';
	}
};
