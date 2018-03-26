/**
 * @Date:   2018-03-14T10:23:31+02:00
 * @Last modified time: 2018-03-26T10:11:17+02:00
 * @Author: Leonardo Martin Jimenez
 * @Email: leomartinjimenez@gmail.com
 */

var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;

var planeta = parseInt(prompt('Cual es tu planeta? \n 1.- Marte\n 2.- Jupiter'));
var pesoUsuario = prompt('Cual es tu peso?');
var peso = parseInt(pesoUsuario);
var planetaDescription;
var pesoFinal;

if (planeta == 1) {
  pesoFinal = (peso * gMarte) / gTierra;
  planetaDescription = 'Marte';
} else if (planeta == 2) {
  pesoFinal = (peso * gJupiter) / gTierra;
  planetaDescription = 'Jupiter';
} else {
  pesoFinal = 1000;
  planetaDescription = 'PLANETA INVENTADO';
}

//alert("Tu peso en Marte es: "+peso);
//pesoFinal=parseInt(pesoFinal);
pesoFinal = (pesoFinal.toFixed(2));
document.write('Tu peso en <strong>' + planetaDescription +
'</strong> es: <strong>' + pesoFinal + ' kg</strong>');
