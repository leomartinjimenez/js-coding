/**
 * @Date:   2018-04-04T01:37:42+02:00
 * @Last modified 2018-04-09
 */
function platzom(str){
  let translation = str;

  // case 1: if the word ends with "ar", you have to remove those characters
  // example: saludar --> salud
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); // from 0 to 2 characters counts from the ends
  }

  // case 2: if the word starts with "Z", you have to add "pe" in the end of the word
  // example: zorro --> zorrope
  if (str.toLowerCase().startsWith('z')) {
    //translation = translation + 'pe';
    translation += 'pe';
  }

  // case 3: if the "translation" word has a leght = or > 10 characters, divide by 2 and insert a middle -
  // example: zorro --> zorrope
  translationLenght = translation.length;
  if (translation.length>=10) {
    const firstHalf = translation.slice(0,Math.round(translationLenght/2));
    const secondHalf = translation.slice(Math.round(translationLenght/2),translationLenght);
    translation = firstHalf + '-' + secondHalf;
  }

  // case 4: if the word is a "Palindromic". Example: "rotator"
  // at this case, to create a word with the pattern lower+upper+lower+.... case
  // Example: rOtAtOr

  function reverse(str) { 
    return str.split('').reverse().join('');
  }

  function lowerUpperWord(str) { 
    const stringLength = str.length;
    let translation = '';
    let capitalize = true;

    let i = 0;
    while (i < stringLength) {
      // statement
      const currentChar = str.charAt(i);

      
      if (capitalize == true) {
        translation += currentChar.toUpperCase();
      } else {
        translation += currentChar.toLowerCase();
      }
      
      // translation += capitalize ? currentChar.toUpperCase() : currentChar.toLowerCase();

      capitalize = !capitalize;

      i++;
    }
   return translation;
  }

  if (str == reverse(str)) {
    //console.log('IS reverse!!! ');
    return lowerUpperWord(str);
  }


  return translation;
}

console.log(platzom('Programar')); // Result --> Program
console.log(platzom('Zorro')); // Result --> Zorrope
console.log(platzom('Zarpar')); // Result --> Zarppe
console.log(platzom('Supercalifragilisticoespialidoso')); // Result --> Zarppe
console.log(platzom('rotator')); // Result --> rOtAtOr
alert(platzom('rotator'));