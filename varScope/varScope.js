//alert('hello')

var name = "Leo"

function greet10() {
  var name
  if (true) {
     name = "Yessica"
  }
  
  console.log(`Hello ${name} - greet10 fuction SCOPE`)
  //console.log('Hola ' + name)
}

greet10("Leo")
console.log(`The variable name sets the value ${name} - Main SCOPE`)


function greetLeo10() {
  const name = "Leo"

  for (let i = 0; i < 10; i++) {
    console.log(`Hello ${name}`)
  }
}

greetLeo10()