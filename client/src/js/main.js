console.log('Start from here')

const burger = document.getElementById('js-menu-trigger')
const nav = document.getElementsByClassName('navigation')[0]

burger.addEventListener('click', function(e) {
  burger.classList.toggle('is-active')
  nav.classList.toggle('is-active')
  
})
