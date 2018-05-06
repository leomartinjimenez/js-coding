function addNumbers (...inputNumbers) {
	/*
	const total = 0
	const totalElements= inputNumbers.length
	for (let i = 0; i < totalElements; i++) {
		total += inputNumbers [i]
		console.log(total)
	}
	*/
	return inputNumbers.reduce( 
		function (total, inputNumber) {
			total += inputNumber
			return total
		}
	, 0)
}

addNumbers (1, 3, 4, 8);


function dobleValues (...inputNumbers) {
	return inputNumbers.map(
		function (inputNumber) {
             return inputNumber * 2
		}
	, 0)
}	

dobleValues (1, 3, 4, 8);


function identifyEvenNumbers (...inputNumbers){
	const result = []

	return inputNumbers.filter(
		function (inputNumber) {
			return inputNumber % 2 == 0
		}, 0)

}

identifyEvenNumbers (1, 2, 3, 4, 8, 16, 22, 44, 123);