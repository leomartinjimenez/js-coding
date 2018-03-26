/**
 * @Date:   2018-03-14T10:56:31+02:00
 * @Last modified time: 2018-03-26T09:48:25+02:00
 * Author: Leonardo Martin Jimenez
 * Email: leomartinjimenez@gmail.com
 */

//alert('hola amigo');

var cvt = document.getElementById('canvasVelezTown');
var paper = cvt.getContext('2d');

var totalCows = randomNumber(1, 20);
var totalPigs = randomNumber(1, 5);
var totalChickens = randomNumber(1, 15);
var totalWolfsA = 1; //randomNumber(0, 2);
//var totalWolfsB = randomNumber(0, 2);
var AddMovement = 6;       // Wolf speed 60 Km/h
var AddMovementCow = 4;    // Cow speed 40 km/h
var AddMovementPig = 2;    // Pig speed 17 km/h
var AddMovementChicken = 1; // Chicken speed 10 km/h
// AFTER loading all IMAGES --> Move the WOLF with the arrow keys
//------------------------------------------------------------
var arrowKeys = {
  40: false,  // DOWN
  38: false,  // UP
  39: false, // RIGHT
  37: false // LEFT
};

//------------------------------------------------------------

// Load the IMAGES to draw into the paper on canvas
//------------------------------------------------------------
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
  loadOK: false,
  currentX: randomNumber(1, 5) * 80,
  currentY: randomNumber(1, 5) * 80
};
cow.image = new Image(); // To add the object image into the var cow
cow.image.src = cow.url;
cow.image.addEventListener('load', loadCows);

var pig = {
  url: 'pig.png',
  loadOK: false,
  currentX: randomNumber(1, 5) * 80,
  currentY: randomNumber(1, 5) * 80
};
pig.image = new Image(); // To add the object image into the var cow
pig.image.src = pig.url;
pig.image.addEventListener('load', loadPigs);

var chicken = {
  url: 'chicken.png',
  loadOK: false,
  currentX: randomNumber(1, 5) * 80,
  currentY: randomNumber(1, 5) * 80
};
chicken.image = new Image(); // To add the object image into the var cow
chicken.image.src = chicken.url;
chicken.image.addEventListener('load', loadChickens);

var wolf = {
  url: 'wolf.png',
  loadOK: false,
  currentX: 200,
  currentY: 200
};
wolf.image = new Image(); // To add the object image into the var cow
wolf.image.src = wolf.url;
wolf.image.addEventListener('load', loadWolfs);


// "FUNCTIONS" to Draw the Images after catching the event "load"
//------------------------------------------------------------
function loadBackground() {
  background.loadOK = true;
  drawOnPaper();
}

function loadCows() {
  cow.loadOK = true;
  drawOnPaper();
}

function loadPigs() {
  pig.loadOK = true;
  drawOnPaper();
}

function loadChickens() {
  chicken.loadOK = true;
  drawOnPaper();
}

function loadWolfs() {
  wolf.loadOK = true;
  drawOnPaper();
}
//------------------------------------------------------------

// Function to draw the image on the Paper of canvas
// ---------------------------------------------------
function drawOnPaper() {
  if (background.loadOK = true) {
    paper.drawImage(background.image, 0, 0); // To draw the image on the canvas
    console.log('background Drawed');
  }

  if (cow.loadOK = true) {
    //var userMin = parseInt(prompt('¿What is the LOWEST random number you want to generate?'));
    //var userMax = parseInt(prompt('¿What is the HIGHEST random number you want to generate?'));

    for (var i = 0; i < totalCows; i++) {
      paper.drawImage(cow.image, cow.currentX, cow.currentY);
      console.log('cows Drawed --> ' + cow.currentX + ', ' + cow.currentY);
    }
  }

  if (pig.loadOK = true) {
    for (var i = 0; i < totalPigs; i++) {
      paper.drawImage(pig.image, pig.currentX, pig.currentY);
      console.log('pigs Drawed --> ' + pig.currentX + ', ' + pig.currentY);
    }
  }

  if (chicken.loadOK = true) {
    for (var i = 0; i < totalChickens; i++) {
      paper.drawImage(chicken.image, chicken.currentX, chicken.currentY);
      console.log('chickens Drawed --> ' + chicken.currentX + ', ' + chicken.currentY);
    }
  }

  if (wolf.loadOK = true) {
    for (var i = 0; i < totalWolfsA; i++) {
      //paper.drawImage(wolf.image, randomNumber(80, 420), randomNumber(80, 250));
      //paper.drawImage(wolf.image, randomNumber(1, 5) * 80, randomNumber(1, 3) * 80);
      console.log('wolf.currentX: ' + wolf.currentX);
      console.log('wolf.currentY: ' + wolf.currentY);
      paper.drawImage(wolf.image, wolf.currentX, wolf.currentY); // Init the Wolf position
      console.log('wolf Drawed');
    }
    /*
    for (var i = 0; i < totalWolfsB; i++) {
      paper.drawImage(wolf.image, randomNumber(1, 5) * 80, randomNumber(3, 5) * 80);
    }
    */
  }

}

// To move the wolf with the arrow keys
// ---------------------------------------------------
document.addEventListener('keydown', moveWolf); // when you press a key
document.addEventListener('keyup', disableWhenKeyUp); // when you give up pressing

function moveWolf(ourEvent) {
  //alert('a key is being pressed');
  console.log(ourEvent);
  if (ourEvent.keyCode in arrowKeys) {
    arrowKeys[ourEvent.keyCode] = true;
    switch (arrowKeys[ourEvent.keyCode]) {
      case arrowKeys[40] && arrowKeys[39]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentX = wolf.currentX + AddMovement; // RIGHT
        wolf.currentY = wolf.currentY + AddMovement; // DOWN
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentX = pig.currentX - (AddMovement - AddMovementPig);  // far/close pig
        pig.currentY = pig.currentY - (AddMovement - AddMovementPig); // far/close pig
        chicken.currentX = chicken.currentX - (AddMovement - AddMovementChicken);  // far/close chicken
        chicken.currentY = chicken.currentY - (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentX = cow.currentX - (AddMovement - AddMovementCow);  // far/close cow
        cow.currentY = cow.currentY - (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow DOWN-RIGHT');
      break;
      case arrowKeys[40] && arrowKeys[37]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentX = wolf.currentX - AddMovement; // LEFT
        wolf.currentY = wolf.currentY + AddMovement; // DOWN
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentX = pig.currentX + (AddMovement - AddMovementPig);  // far/close pig
        pig.currentY = pig.currentY - (AddMovement - AddMovementPig); // far/close pig
        chicken.currentX = chicken.currentX + (AddMovement - AddMovementChicken);  // far/close chicken
        chicken.currentY = chicken.currentY - (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentX = cow.currentX + (AddMovement - AddMovementCow);  // far/close cow
        cow.currentY = cow.currentY - (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow DOWN-LEFT');
      break;
      case arrowKeys[38] && arrowKeys[39]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentX = wolf.currentX + AddMovement; // RIGHT
        wolf.currentY = wolf.currentY - AddMovement; // UP
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentX = pig.currentX - (AddMovement - AddMovementPig);  // far/close pig
        pig.currentY = pig.currentY + (AddMovement - AddMovementPig); // far/close pig
        chicken.currentX = chicken.currentX - (AddMovement - AddMovementChicken);  // far/close chicken
        chicken.currentY = chicken.currentY + (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentX = cow.currentX - (AddMovement - AddMovementCow);  // far/close cow
        cow.currentY = cow.currentY + (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow UP-RIGHT');
      break;
      case arrowKeys[38] && arrowKeys[37]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentX = wolf.currentX - AddMovement; // LEFT
        wolf.currentY = wolf.currentY - AddMovement; // UP
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentX = pig.currentX + (AddMovement - AddMovementPig);  // far/close pig
        pig.currentY = pig.currentY + (AddMovement - AddMovementPig); // far/close pig
        chicken.currentX = chicken.currentX + (AddMovement - AddMovementChicken);  // far/close chicken
        chicken.currentY = chicken.currentY + (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentX = cow.currentX + (AddMovement - AddMovementCow);  // far/close cow
        cow.currentY = cow.currentY + (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow UP-LEFT');
      break;
      case arrowKeys[40]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentY = wolf.currentY + AddMovement; // DOWN
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentY = pig.currentY - (AddMovement - AddMovementPig); // far/close pig
        chicken.currentY = chicken.currentY - (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentY = cow.currentY - (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow DOWN');
      break;
      case arrowKeys[38]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentY = wolf.currentY - AddMovement; // UP
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentY = pig.currentY + (AddMovement - AddMovementPig); // far/close pig
        chicken.currentY = chicken.currentY + (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentY = cow.currentY + (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow UP');
      break;
      case arrowKeys[39]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentX = wolf.currentX + AddMovement; // RIGHT
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentX = pig.currentX - (AddMovement - AddMovementPig); // far/close pig
        chicken.currentX = chicken.currentX - (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentX = cow.currentX - (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow RIGHT');
      break;
      case arrowKeys[37]:
        // WOLF is moving along the map
        //----------------------------------------
        wolf.currentX = wolf.currentX - AddMovement; // LEFT
        // The rest of animals are moving depending on the wolf movements
        //----------------------------------------
        pig.currentX = pig.currentX + (AddMovement - AddMovementPig); // far/close pig
        chicken.currentX = chicken.currentX + (AddMovement - AddMovementChicken); // far/close chicken
        cow.currentX = cow.currentX + (AddMovement - AddMovementCow); // far/close cow
        drawOnPaper();
        console.log('tecla Arrow LEFT');
      break;
    }
  }
}

function disableWhenKeyUp(ourEvent) {
  if (ourEvent.keyCode in arrowKeys) {
    arrowKeys[ourEvent.keyCode] = false;
    //console.log(arrowKeys[ourEvent.keyCode]);
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
