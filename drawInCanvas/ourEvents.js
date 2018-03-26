/**
 * @Date:   2018-03-14T10:23:31+02:00
 * @Last modified time: 2018-03-26T09:45:05+02:00
 * Author: Leonardo Martin Jimenez
 * Email: leomartinjimenez@gmail.com
 */

//alert('funcionando');
//document.addEventListener('keyup', drawWithArrowKeys); // al soltar tecla
document.addEventListener('keydown', drawWithArrowKeys); // al presionar tecla
document.addEventListener('keyup', disableWhenKeyUp); // Detectar varios ourEvents ..
//.. de arrowKeys al mismo tiempo

document.addEventListener('mousedown', clickMouse); // al presionar click
document.addEventListener('mouseup', dropMouse); // al soltar click
document.addEventListener('mousemove', drawWithMouse); // al mover el raton

var arrowKeys = {
  40: false,  // DOWN
  38: false,  // UP
  39: false, // RIGHT
  37: false // LEFT
};

var ourCanvas = document.getElementById('canvasToDraw');
var paper = ourCanvas.getContext('2d');
var currentX = 150;
var currentY = 150;
var drawMovement = 5;
var mouseClickState = 0;
var currentKeyIsPressed = 0; // tecla que actualmente se esta pulsando
var xCanvasStart = 150;
var yCanvasStart = 150;
var x; // guarda coordenada x
var y; // guarda coordenada y
var lineWidth = 3; // grosor del trazo al dibujar
var deleteLineWidth = 15; // grosor del trazo al borrar con la goma

//------------------------------------------------------------
// Init - Frame and middle point to start drawing
//------------------------------------------------------------
dibujarLinea('#000f', lineWidth, xCanvasStart - 1, yCanvasStart - 1, xCanvasStart + 1,
 yCanvasStart + 1, paper); // To draw a point in the center of canvas
dibujarLinea('red', lineWidth, 0, 0, 300, 0, paper); // To draw the frame of the canvas
dibujarLinea('red', lineWidth, 0, 0, 0, 300, paper); // To draw the frame of the canvas
dibujarLinea('red', lineWidth, 300, 0, 300, 300, paper); // To draw the frame of the canvas
dibujarLinea('red', lineWidth, 0, 300, 300, 300, paper); // To draw the frame of the canvas
//------------------------------------------------------------

function drawWithArrowKeys(ourEvent) {
  //alert('Funcionando Tecla Pulsada');
  console.log(ourEvent);
  if (ourEvent.keyCode in arrowKeys) {
    arrowKeys[ourEvent.keyCode] = true;
    switch (arrowKeys[ourEvent.keyCode]) {
      case arrowKeys[40] && arrowKeys[39]:
        dibujarLinea('blue', lineWidth, currentX, currentY, currentX + drawMovement,
        currentY + drawMovement, paper);
        currentY = currentY + drawMovement; // DOWN
        currentX = currentX + drawMovement; // RIGHT
        console.log('tecla Arrow DOWN-RIGHT');
      break;
      case arrowKeys[40] && arrowKeys[37]:
        dibujarLinea('blue', lineWidth, currentX, currentY, currentX - drawMovement,
         currentY + drawMovement, paper);
        currentY = currentY + drawMovement; // DOWN
        currentX = currentX - drawMovement; // LEFT
        console.log('tecla Arrow DOWN-LEFT');
      break;
      case arrowKeys[38] && arrowKeys[39]:
        dibujarLinea('orange', lineWidth, currentX, currentY, currentX + drawMovement,
        currentY - drawMovement, paper);
        currentY = currentY - drawMovement; // UP
        currentX = currentX + drawMovement; // RIGHT
        console.log('tecla Arrow UP-RIGHT');
      break;
      case arrowKeys[38] && arrowKeys[37]:
        dibujarLinea('orange', lineWidth, currentX, currentY, currentX - drawMovement,
         currentY - drawMovement, paper);
        currentY = currentY - drawMovement; // UP
        currentX = currentX - drawMovement; // LEFT
        console.log('tecla Arrow UP-LEFT');
      break;
      case arrowKeys[40]:
        dibujarLinea('blue', lineWidth, currentX, currentY, currentX, currentY + drawMovement,
         paper);
        currentY = currentY + drawMovement;
        console.log('tecla Arrow DOWN');
      break;
      case arrowKeys[38]:
        dibujarLinea('orange', lineWidth, currentX, currentY, currentX, currentY - drawMovement,
         paper);
        currentY = currentY - drawMovement;
        console.log('tecla Arrow UP');
      break;
      case arrowKeys[39]:
        dibujarLinea('green', lineWidth, currentX, currentY, currentX + drawMovement, currentY,
         paper);
        currentX = currentX + drawMovement;
        console.log('tecla Arrow RIGHT');
      break;
      case arrowKeys[37]:
        dibujarLinea('purple', lineWidth, currentX, currentY, currentX - drawMovement, currentY,
         paper);
        currentX = currentX - drawMovement;
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

function drawWithMouse(ourEvent) {
  console.log(ourEvent);
  console.log('drawWithMouse');
  console.log('el estado del click es: ' + mouseClickState);
  if (mouseClickState == 1) {
    if (ourEvent.buttons == 2) {
      // Boton derecho pulsado para BORRAR
      dibujarLinea('white', deleteLineWidth, x, y, ourEvent.layerX, ourEvent.layerY, paper);
    }else {
      // solo dibuja si está el click del raton presionado
      dibujarLinea('black', lineWidth, x, y, ourEvent.layerX, ourEvent.layerY, paper);
    }
  }

  x = ourEvent.layerX;
  y = ourEvent.layerY;
}

function clickMouse(ourEvent) {
  //console.log(ourEvent);
  //console.log('clickMouse');
  mouseClickState = 1;
  console.log('el estado del click es: ' + mouseClickState);
  x = ourEvent.layerX;
  y = ourEvent.layerY;

  //dibujarLinea('purple', currentX, currentY, currentX - drawMovement, currentY, paper);
  //currentX = currentX - drawMovement;
}

function dropMouse(ourEvent) {
  //console.log(ourEvent);
  //console.log('dropMouse');
  mouseClickState = 0;
  console.log('el estado del click es: ' + mouseClickState);
  x = ourEvent.layerX;
  y = ourEvent.layerY;

  //dibujarLinea('purple', currentX, currentY, currentX - drawMovement, currentY, paper);
  //currentX = currentX - drawMovement;
}

function dibujarLinea(color, grosorLinea, xInicial, yInicial, xFinal, yFinal, lienzo)
{
  lienzo.beginPath();                 // Inicio del trazo
  lienzo.strokeStyle = color;         // estilo del trazo
  lienzo.width = grosorLinea;         // ancho de la linea
  lienzo.moveTo(xInicial, yInicial);  // donde comienza la linea
  lienzo.lineTo(xFinal, yFinal);      // traza la linea hasta el punto xFinal
  lienzo.stroke();                    // Dibuja con el estilo el trazo
  lienzo.closePath();                 // Cierra el dibujo
}
