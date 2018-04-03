/**
 * @Date:   2018-04-04T01:12:23+02:00
 * @Last modified time: 2018-04-04T01:33:11+02:00
 */

const starWars7 = 'Star Wars: El Despertar de la Fuerza';
const pgStarWars7 = 13;

const nameAdult = 'Leo';
let ageAdult = 31;

const nameChild = 'Guillermo';
let ageChild = 12;

function canWatchStarWars7(name, age, isWithAdult = false) {
  if (age >= pgStarWars7) {
    //alert(`${name} you can watch ${starWars7}`);
    alert(name + ' can watch ' + starWars7);
  } else if (isWithAdult) {
    // alert(`${name} puede pasar a ver ${starWars7}.
    //   Aunque su edad es ${age}, se encuentra acompaÃ±ada/o por un adulto`);
    alert(name + ' can watch ' + starWars7 + '. Although your age is ' + age
       + ', you are with an adult responsible for you');
  } else {
    //alert(`${name} no puede pasar a ver ${starWars7}.
    //  Tiene ${age} aÃ±os y necesita tener ${pgStarWars7}`);
    alert(name + ' can NOT watch ' + starWars7 + 'You are only ' + age
         + ' years old and it must be ' + pgStarWars7);
  }
}

canWatchStarWars7(nameAdult, ageAdult);
canWatchStarWars7(nameChild, ageChild, true);
