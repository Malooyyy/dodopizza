function show() {
	document.getElementById('btnID').style.display = 'block'

	document.getElementById('image').style.display = 'block'
}

function chpok(id) {
	elem = document.getElementById(id) //находим блок div по его id, который передали в функцию
	state = elem.style.display //смотрим, включен ли сейчас элемент
	if (state == '') elem.style.display = 'block' //если включен, то выключаем
	else elem.style.display = '' //иначе - включаем
}

// size main image
document.querySelector('#max').onclick = function () {
	var image = document.getElementById('cont')
	image.style.width = '450px'
	image.style.height = 'auto'
}

document.querySelector('#normal').onclick = function () {
	var image = document.getElementById('cont')
	image.style.width = '350px'
	image.style.height = 'auto'
}

document.querySelector('#minimal').onclick = function () {
	var image = document.getElementById('cont')
	image.style.width = '250px'
	image.style.height = 'auto'
}

// Popup X

let cartIcon = document.querySelector('.amg')

let cart = document.querySelector('.cart')

let closeCart = document.querySelector('.close-cart')

// Open Cart

cartIcon.onclick = () => {
	cart.classList.add('active')
}
closeCart.onclick = () => {
	cart.classList.remove('active')
}
