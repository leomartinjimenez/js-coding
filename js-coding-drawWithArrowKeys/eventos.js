//alert('funcionando');
//document.addEventListener('keyup', dibujarPizarra); // al soltar tecla
document.addEventListener('keydown', dibujarPizarra); // al presionar tecla
document.addEventListener('keyup', detectarVariasTeclasdibujarPizarra); // Detectar varios eventos ..
//.. de teclas al mismo tiempo

document.addEventListener('mousedown', presionarMouse); // al presionar click
document.addEventListener('mouseup', soltarMouse); // al soltar click
document.addEventListener('mousemove', dibujarMouse); // al mover el raton

var teclas = {
  DOWN: '40-false',
  UP: '38-false',
  RIGHT: '39-false',
  LEFT: '37-false',
};
var ourCanvas = document.getElementById('areaDeDibujo');
var papel = ourCanvas.getContext('2d');
var currentX = 150;
var currentY = 150;
var movimiento = 5;
var estadoClick = 0;
var currentTecla = 0; // tecla que actualmente se esta pulsando
var xCanvasInicial = 150;
var yCavasInicial = 150;
var x; // guarda coordenada x
var y; // guarda coordenada y
var grosorTrazo = 3; // grosor del trazo al dibujar
var grosorTrazoBorrar = 15; // grosor del trazo al borrar con la goma
//document.addEventListener('keyup', dibujarTecladoUp);

dibujarLinea('red', xCanvasInicial - 1, yCavasInicial - 1, xCanvasInicial + 1,
 yCavasInicial + 1, papel); // Dibujar punto en el centro
function dibujarPizarra(evento) {
  //alert('Funcionando Tecla Pulsada');
  console.log(evento);

  switch (evento.keyCode) {
    case teclas.DOWN && teclas.RIGHT:
      dibujarLinea('blue', grosorTrazo, currentX, currentY, currentX + movimiento,
      currentY + movimiento, papel);
      currentY = currentY + movimiento; // DOWN
      currentX = currentX + movimiento; // RIGHT
      console.log('tecla Arrow DOWN-RIGHT');
    break;
    case teclas.DOWN && teclas.LEFT:
      dibujarLinea('blue', grosorTrazo, currentX, currentY, currentX - movimiento,
       currentY + movimiento, papel);
      currentY = currentY + movimiento; // DOWN
      currentX = currentX - movimiento; // LEFT
      console.log('tecla Arrow DOWN-LEFT');
    break;
    case teclas.UP && teclas.RIGHT:
      dibujarLinea('orange', grosorTrazo, currentX, currentY, currentX + movimiento,
      currentY - movimiento, papel);
      currentY = currentY - movimiento; // UP
      currentX = currentX + movimiento; // RIGHT
      console.log('tecla Arrow UP-RIGHT');
    break;
    case teclas.UP && teclas.LEFT:
      dibujarLinea('orange', grosorTrazo, currentX, currentY, currentX - movimiento,
       currentY - movimiento, papel);
      currentY = currentY - movimiento; // UP
      currentX = currentX - movimiento; // LEFT
      console.log('tecla Arrow UP-LEFT');
    break;
    case teclas.DOWN:
      dibujarLinea('blue', grosorTrazo, currentX, currentY, currentX, currentY + movimiento,
       papel);
      currentY = currentY + movimiento;
      console.log('tecla Arrow DOWN');
    break;
    case teclas.UP:
      dibujarLinea('orange', grosorTrazo, currentX, currentY, currentX, currentY - movimiento,
       papel);
      currentY = currentY - movimiento;
      console.log('tecla Arrow UP');
    break;
    case teclas.RIGHT:
      dibujarLinea('black', grosorTrazo, currentX, currentY, currentX + movimiento, currentY,
       papel);
      currentX = currentX + movimiento;
      console.log('tecla Arrow RIGHT');
    break;
    case teclas.LEFT:
      dibujarLinea('purple', grosorTrazo, currentX, currentY, currentX - movimiento, currentY,
       papel);
      currentX = currentX - movimiento;
      console.log('tecla Arrow LEFT');
    break;
  }
}

function detectarVariasTeclasdibujarPizarra(evento) {
  if (evento.keyCode in teclas) {
    map[evento.keyCode] = false;
  }
}

function dibujarMouse(evento) {
  console.log(evento);
  console.log('dibujarMouse');
  console.log('el estado del click es: ' + estadoClick);
  if (estadoClick == 1) {
    if (evento.buttons == 2) {
      // Boton derecho pulsado para BORRAR
      dibujarLinea('white', grosorTrazoBorrar, x, y, evento.layerX, evento.layerY, papel);
    }else {
      // solo dibuja si está el click del raton presionado
      dibujarLinea('black', grosorTrazo, x, y, evento.layerX, evento.layerY, papel);
    }
  }

  x = evento.layerX;
  y = evento.layerY;
}

function presionarMouse(evento) {
  //console.log(evento);
  //console.log('presionarMouse');
  estadoClick = 1;
  console.log('el estado del click es: ' + estadoClick);
  x = evento.layerX;
  y = evento.layerY;

  //dibujarLinea('purple', currentX, currentY, currentX - movimiento, currentY, papel);
  //currentX = currentX - movimiento;
}

function soltarMouse(evento) {
  //console.log(evento);
  //console.log('soltarMouse');
  estadoClick = 0;
  console.log('el estado del click es: ' + estadoClick);
  x = evento.layerX;
  y = evento.layerY;

  //dibujarLinea('purple', currentX, currentY, currentX - movimiento, currentY, papel);
  //currentX = currentX - movimiento;
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
