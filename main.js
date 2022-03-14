// grab elements from HTML doc
const body = document.querySelector('body');

// Example of dynamically creating elements and appending them to existing html nodes
// const btn = document.createElement('button');
// btn.innerHTML = 'Hello button';
// body.appendChild(btn);

// container to hold the grid divs
const containerDiv = document.createElement('div');
containerDiv.id = 'container-div';
// containerDiv.style.backgroundColor = 'red';
// containerDiv.style.height = '500px';
// containerDiv.style.width = '500px';
body.appendChild(containerDiv);

const coolstuff = [];
// loop to produce 256 (16 x 16) small divs
for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	div.id = 'blueBox';
	containerDiv.appendChild(div);
	coolstuff.push(div);
}

coolstuff.forEach((element) =>
	addEventListener(
		'mouseover',
		function (event) {
			// highlight the mouseenter target
			event.target.style.backgroundColor = 'green';

			// reset the color after a short delay
			setTimeout(function () {
				event.target.style.backgroundColor = '';
			}, 500);
		},
		false
	)
);