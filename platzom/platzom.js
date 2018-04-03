/**
 * @Date:   2018-04-04T01:37:42+02:00
 * @Last modified time: 2018-04-04T01:52:01+02:00
 */
function platzom(str){
  let translation = str;

  // case 1: if the word ends with "ar", you have to remove those characters
  // example: saludar --> salud
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); // from 0 to 2 characters counts from the ends
  }

  // case 1: if the word starts with "Z", you have to add "pe" in the end of the word
  // example: zorro --> zorrope
  if (str.toLowerCase().startsWith('z')) {
    //translation = translation + 'pe';
    translation += 'pe';
  }
  return translation;
}

console.log(platzom('Programar')); // Result --> Program
console.log(platzom('Zorro')); // Result --> Zorrope
console.log(platzom('Zarpar')); // Result --> Zarppe
