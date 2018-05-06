/*
function greetMartinFamily (name) {
	console.log('Hola ' + name + 'Martin')
}

function greetRuizFamily (name) {
	console.log('Hola ' + name + 'Ruiz')
}

greetMartinFamily ('Leo');
greetRuizFamily ('Yessica');
*/

function greetFamily (givenName) {
	return function greetMemberOfFamily (name) {
		console.log('Hola ' + name + ' ' + givenName)
	}
}

const greetMartinFamily = greetFamily('Martin')
const greetRuizFamily = greetFamily('Ruiz')

greetMartinFamily ('Leo')
greetMartinFamily ('Yessica')

//-----------------------------------------------

function makePrefixer (prefix) {
	 return function function_name (inputWord) {
	 	console.log(prefix+inputWord) 
	 } 
}
const rePrefix = makePrefixer ('re')
rePrefix ('port') // report
const imPrefix = makePrefixer ('im')
imPrefix ('possible') // impossible
