//alert('HIRE me');

var i = parseInt(prompt('Start the FizzBuzz FROM'));
var maxNumber = parseInt(prompt('Finish the FizzBuzz TO'));
/*
var form = document.getElementById(myForm).submit();
var i = document.getElementById(startBox).addEventListener('click',
  function () {
    form.submit();
  }
);
var maxNumber = document.getElementById(finishBox).addEventListener('click',
  function () {
    form.submit();
  }
);
console.log('startBox: ' + i);
console.log('finishBox: ' + maxNumber);
*/

fizzBuzz(i, maxNumber);

function isDivisible(numberFirst, divisor) {
  if (numberFirst % divisor == 0) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz (startNumber, finishNumber) {
  console.log(startNumber);
  if (!isNaN(startNumber)) {
    startNumber = 0;
  };
  if (!isNaN(finishNumber)) {
    finishNumber = 100;
  };

  while (startNumber <= finishNumber) {
    if (isDivisible(startNumber, 3)) {
      document.write('Fizz' + '<br>');
    };
    if (isDivisible(startNumber, 5)) {
      document.write('Buzz' + '<br>');
    };
    if ((isDivisible(startNumber, 3)) && (!isDivisible(startNumber, 5))) {
      document.write(startNumber + '<br>');
    };

    startNumber++;
  }
}
