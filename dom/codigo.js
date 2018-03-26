/**
 * @Date:   2018-03-13T15:54:31+02:00
 * @Last modified time: 2018-03-26T14:11:08+02:00
 * @Author: leomartinjimenez
 */
var ruta = window.location;

console.log('Estoy depurando LOG, mensaje secreto');
console.log(ruta);
console.log(window);
console.log(navigator);
document.write('Estás en: ' + ruta.origin);
