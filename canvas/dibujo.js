/**
 * @Date:   2018-03-13T15:54:31+02:00
 * @Last modified time: 2018-03-26T09:43:58+02:00
 * Author: Leonardo Martin Jimenez
 * Email: leomartinjimenez@gmail.com
 */


var texto = document.getElementById('textoLineas');
var boton = document.getElementById('botonEnviar');
boton.addEventListener('click', dibujoPorClick);

var ourCanvas = document.getElementById('dibujoEjemploCanvas');
var lienzo = ourCanvas.getContext('2d');
var lienzoSize = ourCanvas.height;

var i = 0;
var yi;
var xf;
var customColorReference = '#b32b0c';
var customColorLines = '#2a44d0';
//var totalLineas = prompt('¿Cuántas líneas quieres dibujar?');

dibujarLinea(customColorReference, 1, 1, 1, 299);
dibujarLinea(customColorReference, 1, 299, 299, 299);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var totalLineas = parseInt(texto.value);
  var lienzoLength = lienzoSize;
  while (i < totalLineas) {
    //xi = lienzoLength * i;
    //yf = lienzoLength * (i + 1);
    xi = 10 * i;
    yf = 10 * (i + 1);

    dibujarLinea(customColorLines, xi, 0, 300, yf);
    yi = 10 * i;
    xf = 10 * (i + 1);
    dibujarLinea(customColorLines, 0, yi, xf, 300);
    console.log('Linea' + i);
    i++;
  }
}
