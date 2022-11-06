var popup = document.querySelector('.cart')
var btn = document.querySelector('.box-btn')
var close = document.querySelector('.close')

btn.addEventListener('click', function (event) {
	event.preventDefault()
	popup.classList.remove('hidden')
})

popup.addEventListener('click', function (event) {
	e = event || window.event
	if (e.target == this) {
		popup.classList.add('hidden')
	}
})

close.addEventListener('click', function (event) {
	event.preventDefault()
	popup.classList.add('hidden')
})
