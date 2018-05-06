

// Javascript Prototype
function Dot (x, y) {
	this.x = x;
	this.y = y;

	//return this
}

// Add two methods moveXpos and moveYpos into the Prototype Dot
Dot.prototype.moveXpos = function moveXpos(x) { 
	this.x += x 
}

Dot.prototype.moveYpos = function moveYpos(moveYpos) { 
	this.y += y
}

Dot.prototype.distance = function distance (dot) {
	const x = this.x - dot.x;
	const y = this.y - dot.y;

	return ( Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)))
}


const dot1 = new Dot (0,4);
const dot2 = new Dot (3,0);

console.log('The distance is : ' + dot1.distance(dot2));
//alert(distance(dot1,dot2));

/*
dot1 = {
	x : 0,
	y : 4,
	function moveXpos (x) { this.x += x },
	function moveYpos (y) { this.y += y }
}

dot2 = {
	x : 3,
	y : 0,
	function moveXpos (x) { this.x += x },
	function moveYpos (y) { this.y += y }
}


function distance (dot1, dot2) {
	const x = dot1.x - dot2.x;
	const y = dot1.y - dot2.y;

	return ( Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)))
}

alert(distance(dot1,dot2));
*/