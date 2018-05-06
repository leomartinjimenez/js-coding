class Person {
	constructor (name, friends = []){
		this.name = name
		this.friends = friends
	}
	/*
	listOfFriends (){
		const self = this
		this.friends.forEach(function (friend) {
				console.log('Hi, my name is ' + friend + ', and ' + self.name + ' is a friend of mine!')
			}
		)
	}
	*/

	listOfFriends (){
		this.friends.forEach(function (friend) {
				console.log('Hi, my name is ' + friend + ', and ' + this.name + ' is a friend of mine!')
			}.bind(this)
		)
	}
}


const leo = new Person ('Leo', ['Dani','David', 'Migue','Jorge'])

leo.listOfFriends()