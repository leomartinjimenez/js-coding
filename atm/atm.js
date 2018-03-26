/**
 * @Date:   2018-03-25T12:44:31+02:00
 * @Last modified time: 2018-03-26T10:11:12+02:00
 * @Author: Leonardo Martin Jimenez
 * @Email: leomartinjimenez@gmail.com
 */

// Init variables
var moneyAtmAvailable = 0;

class BankNote {
  constructor(noteIn, quantityIn) {
    this.note = noteIn;
    this.quantity = quantityIn;

    this.total = noteIn * quantityIn;
  }
}

function isDivisible(numberFirst, divisor) {
  if (numberFirst % divisor == 0) {
    return true;
  } else {
    return false;
  }
}

// atmCash --> pushed Elements order by notes 'desc'
//---------------------------------------------------
var fiftyNotes = new BankNote(50, 4);
var twentyNotes = new BankNote(20, 10);
var tenNotes = new BankNote(10, 10);

var atmCash = [];
atmCash.push(fiftyNotes);
atmCash.push(twentyNotes);
atmCash.push(tenNotes);

//---------------------------------------------------

for (var i in atmCash) {
  console.log(atmCash[i]);
  moneyAtmAvailable = moneyAtmAvailable + atmCash[i].total;
}
console.log('moneyAtmAvailable: ' + moneyAtmAvailable);

var atmMoneyDispensed = [];

var moneyRequested = prompt('How much money do you want to take Money (notes) from ATM Machine?');
console.log(moneyRequested); //User requests a quantity of money.

var currentMoney = moneyRequested;
var enoughBankNotes = moneyRequested;
var divCurrentMoney;
var modCurrentMoney;
var notesToDispense;
var wrongMoneyRequested = 0;

if (moneyAtmAvailable >= moneyRequested) {
  for (var index in atmCash) {
    if (isDivisible(moneyRequested, 2) && isDivisible(moneyRequested, 5)) {
      enoughBankNotes = enoughBankNotes - atmCash[index].total;
      if (enoughBankNotes > 0) {
        notesToDispense = atmCash[index].quantity;
        atmMoneyDispensed.push(new BankNote(atmCash[index].note, atmCash[index].quantity));
        console.log('notesToDispense ' + atmCash[index].note + ' euros : ' + notesToDispense);
        currentMoney = enoughBankNotes;
      } else {
        console.log('currentMoney' + currentMoney);
        divCurrentMoney = Math.floor(currentMoney / atmCash[index].note);
        modCurrentMoney = Math.floor(currentMoney % atmCash[index].note);
        console.log('divCurrentMoney :' + divCurrentMoney);
        console.log('modCurrentMoney :' + modCurrentMoney);
        notesToDispense = divCurrentMoney;
        if (divCurrentMoney > 0) {
          atmMoneyDispensed.push(new BankNote(atmCash[index].note, divCurrentMoney));
        }
        console.log('notesToDispense ' + atmCash[index].note + ' euros : ' + notesToDispense);
        currentMoney = currentMoney - (divCurrentMoney * atmCash[index].note);
      }
    } else {
      divCurrentMoney = Math.floor(currentMoney / atmCash[index].note);
      modCurrentMoney = Math.floor(currentMoney % atmCash[index].note);
      console.log('divCurrentMoney :' + divCurrentMoney);
      console.log('modCurrentMoney :' + modCurrentMoney);
      console.log('isDivisible by 2 : ' + isDivisible(moneyRequested, 2));
      console.log('isDivisible by 5 : ' + isDivisible(moneyRequested, 5));
      wrongMoneyRequested++;
    }
  }
}

if (wrongMoneyRequested > 0) {
  alert('ERROR : Please, enter a right quantity (the ATM only has 10, 20 and 50 notes)');
  document.write('<li> <strong>ERROR :</strong> Please, enter a right quantity (the ATM only has 10, 20 and 50 notes) </li>');
} else if (moneyAtmAvailable < moneyRequested) {
  alert('ATM does NOT have ENOUGH money to dispense you : Please, enter a lower quantity (money Available: ' + moneyAtmAvailable + ')');
  document.write('<li>ATM does NOT have enough money to dispense you : </br> Please, enter a lower quantity (money <strong>available: ' + moneyAtmAvailable + ' euros</strong>)</li>');
} else {
  document.write('<ul><strong>Take your money: </strong></ul>');
  for (var v in atmMoneyDispensed) {
    console.log(atmMoneyDispensed[v]);
    document.write('<li> <strong>' + atmMoneyDispensed[v].quantity + '</strong> bank notes of ' + atmMoneyDispensed[v].note  + ' euros'  + '<br/></li>');
  }
}
