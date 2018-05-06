alert('The battle is about to start: are you ready? ');

let lifeGoku = 100;
let lifeSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let round = 0;

function bothAreAlive () {
	let answer = false;
	if (lifeGoku > 0 && lifeSuperman > 0) {
		answer = true;
	}

	return answer
}

function calculateHit () {
	return ( Math.round((Math.random() * (MAX_POWER-MIN_POWER) + MIN_POWER)) );
}

console.log('*** START the battle: ***');
console.log('-. GOKU has the INIT life: ' + lifeGoku);
console.log('-. SUPERMAN has the INIT life: ' + lifeSuperman);

while ( bothAreAlive() ) {
	
	round++;
	console.log('Round: ' + round);

	const hitGoku = calculateHit();
	const hitSuperman = calculateHit();

	if (hitGoku > hitSuperman) {
		// Goku attacks
		console.log('Goku attacks Superman --> Hit = ' + hitGoku);
		document.write('Goku attacks Superman --> Hit = ' + hitGoku);
		lifeSuperman -= hitGoku;
		// lifeSuperman = lifeSuperman - hitGoku;
		console.log('-. SUPERMAN has the current life: ' + lifeSuperman);
		document.write('-. SUPERMAN has the current life: ' + lifeSuperman);
	} else {
		// Superman attacks
		console.log('Superman attacks Goku --> Hit = ' + hitSuperman);
		document.write('Superman attacks Goku --> Hit = ' + hitSuperman);
		lifeGoku -= hitSuperman;
		// lifeGoku = lifeGoku - hitSuperman;
		console.log('-. GOKU has the current life: ' + lifeGoku);
		document.write('-. GOKU has the current life: ' + lifeGoku);
	}
	
}

function gokuKeepAlive () {
	let answer = false;
	if (lifeGoku > 0) {
		answer = true;
	}
	return answer;
}

if (gokuKeepAlive()) {
	console.log('The WINNER is: ' + 'GOKU !!! :)');
	alert('The WINNER is: ' + 'GOKU !!! :)');
} else {
	console.log('The WINNER is: ' + 'SUPERMAN !!! :)');
	alert('The WINNER is: ' + 'SUPERMAN !!! :)');
}