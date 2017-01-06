var canvas;
var points = [];
var numberOfColumns;
var numberOfRows;
var numberOfPoints;

function setup() {
	canvas = createCanvas(windowWidth - 20, 1500);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	numberOfColumns = 50;
	numberOfRows = 50;
	numberOfPoints = numberOfColumns * numberOfRows;
	for (var i = 0; i < numberOfPoints; i++) {
		var pointIndexX = 30 + windowWidth / numberOfColumns * (i % numberOfColumns);
		var pointIndexY = 1500 / numberOfRows * (floor(i/numberOfColumns));
		points.push(new grid(pointIndexX, pointIndexY));
	};
}

//Grid class
function grid(pointX, pointY){
	this.x = pointX;
	this.y = pointY;
	this.diameter = 2;

	this.display = function() {
		var distance = dist(mouseX, mouseY, this.x, this.y);
		// if (distance < 700){
		// line(this.x - this.diameter, this.y, this.x + this.diameter, this.y);
		// line(this.x, this.y - this.diameter, this.x, this.y + this.diameter);
			ellipse(this.x, this.y, this.diameter, this.diameter);
		// };
	};

	this.update = function(){
		var distance = dist(mouseX, mouseY, this.x, this.y);
		this.diameter = map(distance, 0, 500, 1, 3);
	}
}

function draw() {
	background('#F2F2F2');
	noFill();
	stroke(200);
	strokeWeight(0.5);
	for (var i = 0; i < points.length; i++) {
		points[i].display();
		points[i].update();
	};
}