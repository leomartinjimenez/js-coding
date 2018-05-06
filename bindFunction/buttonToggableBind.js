class Toggable {
	constructor(element){
		// init he inner state
		// el = element
		this.element = element
		this.element.innerHTML = 'Off'
		this.activated = false
		this.onClick = this.onClick.bind(this)
		this.element.addEventListener('click', this.onClick)
		console.log(element)
	}	

	onClick () {
		this.activated = !this.activated
		this.toggleText()
		console.log(this.element.innerHTML)
	}

	toggleText () {
		//this.element.innerHTML = this.activated ? 'On' : 'Off'

		if (this.activated == true) {
			this.element.innerHTML = 'On'
		} else {
			this.element.innerHTML = 'Off'
		}
	}

}

const button = document.getElementById('indexButton')
const myButton = new Toggable (button)

console.log('button : ' + button)
console.log('myButton : ' + myButton)