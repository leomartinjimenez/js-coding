//alert('hola amigo');

var cvt = document.getElementById('canvasVelezTown');
var paper = cvt.getContext('2d');

var background = {
  url: 'tile.png',
  loadOK: false
};
background.image = new Image(); // Add an attribute image into the background
// .. for that, you DONT have to use "var"
background.image.src = background.url;
background.image.addEventListener('load', loadBackground);

var cow = {
  url: 'cow.png',
  loadOK: false
};
cow.image = new Image(); // To add the object image into the var cow
cow.image.src = cow.url;
cow.image.addEventListener('load', loadCows);

var pig = {
  url: 'pig.png',
  loadOK: false
};
pig.image = new Image(); // To add the object image into the var cow
pig.image.src = pig.url;
pig.image.addEventListener('load', loadPigs);

var chicken = {
  url: 'chicken.png',
  loadOK: false
};
chicken.image = new Image(); // To add the object image into the var cow
chicken.image.src = chicken.url;
chicken.image.addEventListener('load', loadChickens);

var wolf = {
  url: 'wolf.png',
  loadOK: false
};
wolf.image = new Image(); // To add the object image into the var cow
wolf.image.src = wolf.url;
wolf.image.addEventListener('load', loadWolfs);

function loadBackground() {
  background.loadOK = true;
  drawOnCanvas();
}

function loadCows() {
  cow.loadOK = true;
  drawOnCanvas();
}

function loadPigs() {
  pig.loadOK = true;
  drawOnCanvas();
}

function loadChickens() {
  chicken.loadOK = true;
  drawOnCanvas();
}

function loadWolfs() {
  wolf.loadOK = true;
  drawOnCanvas();
}

var totalCows = randomNumber(0, 20);
var totalPigs = randomNumber(0, 5);
var totalChickens = randomNumber(0, 15);
var totalWolfsA = randomNumber(0, 2);
var totalWolfsB = randomNumber(0, 2);

function drawOnCanvas() {
  if (background.loadOK = true) {
    paper.drawImage(background.image, 0, 0); // To draw the image on the canvas
  }

  if (cow.loadOK = true) {
    //var userMin = parseInt(prompt('¿What is the LOWEST random number you want to generate?'));
    //var userMax = parseInt(prompt('¿What is the HIGHEST random number you want to generate?'));

    for (var i = 0; i < totalCows; i++) {
      var xDrawCow = randomNumber(1, 5);
      var yDrawCow = randomNumber(1, 6);
      var xDrawCow = xDrawCow * 80;
      var yDrawCow = yDrawCow * 80;
      paper.drawImage(cow.image, xDrawCow, yDrawCow);
    }
  }

  if (pig.loadOK = true) {
    for (var i = 0; i < totalPigs; i++) {
      paper.drawImage(pig.image, randomNumber(1, 5) * 80, randomNumber(1, 6) * 80);
    }
  }

  if (chicken.loadOK = true) {
    for (var i = 0; i < totalChickens; i++) {
      paper.drawImage(chicken.image, randomNumber(1, 5) * 80, randomNumber(1, 6) * 80);
    }
  }

  if (wolf.loadOK = true) {
    for (var i = 0; i < totalWolfsA; i++) {
      //paper.drawImage(wolf.image, randomNumber(80, 420), randomNumber(80, 250));
      paper.drawImage(wolf.image, randomNumber(1, 5) * 80, randomNumber(1, 3) * 80);
    }

    for (var i = 0; i < totalWolfsB; i++) {
      //paper.drawImage(wolf.image, randomNumber(80, 420), randomNumber(250, 420));
      paper.drawImage(wolf.image, randomNumber(1, 5) * 80, randomNumber(3, 5) * 80);
    }
  }

}

function randomNumber(minNumber, maxNumber) {
  var result;
  result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  //console.log(result);
  return result;
}

/*
var userMin = parseInt(prompt('¿What is the LOWEST random number you want to generate?'));
var userMax = parseInt(prompt('¿What is the HIGHEST random number you want to generate?'));

var i = 0;
var MaxIterators = 20;
var randomArray = randomNumber(userMin, userMax);

while (i < MaxIterators) {
  var x = randomNumber(userMin, userMax);
  randomArray = randomArray + ', ' + x;
  i++;
}

document.write('The random numbers are: ' + randomArray);

*/
