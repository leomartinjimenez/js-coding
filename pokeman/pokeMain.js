//alert('HOLA');

// Associative array
var myImages = [];
myImages ['Picowyou'] = 'cow.png';
myImages ['Kichenin'] = 'chicken.png';
myImages ['Pigmalion'] = 'pig.png';

// javascript object notation --> json
/*
var images = {
  Picowyou: 'cow.png',
  Kichenin: 'chicken.png',
  Pigmalion: 'pig.png',
};
*/

var picowyou = new Pokeman('Picowyou', 'ground','100','30');
var kichenin = new Pokeman('Kichenin', 'flying', '80','50');
var pigmalion = new Pokeman('Pigmalion', 'fire', '120','40');
//console.log(picowyou, kichenin, pigmalion);

var myCollection = [];
myCollection.push(picowyou);
myCollection.push(kichenin);
myCollection.push(pigmalion);

for (var i in myCollection) {
  console.log(myCollection[i]);
}

for (var j of myCollection) {
  console.log(j);
  j.showImage();
}

for (var x in myImages) {
  console.log(x);
}

for (var y in myCollection[0]) {
  console.log(y);
}
