function makeGrid(height, width) {
	let grid = "";
	for (let row=0; row<height; row++){
		grid += "<tr>"
		for (let col=0; col<width; col++){
			grid += "<td></td>"
		}
		grid += "</tr>"
	}
	let table = document.getElementById('pixelCanvas');
	table.innerHTML = grid;
}

document.addEventListener('submit', function (e) {
	e.preventDefault();
	var tableHeight = document.getElementById('inputHeight').value;
	var tableWidth = document.getElementById('inputWeight').value;
	makeGrid(tableHeight, tableWidth);
});

let table = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');
table.addEventListener('click', function (e) {
	if (e.path[0].nodeName === "TD") {
		e.path[0].style.background = color.value;
	} else {
		console.log("not correct!")
	}
});