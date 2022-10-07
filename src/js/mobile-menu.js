const buttonOpen = document.querySelector('.js-open-menu');
const buttonClose = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');

buttonOpen.addEventListener('click', onButtonOpenClick);
buttonClose.addEventListener('click', onButtonCloseClick);

function onButtonOpenClick() {
  buttonOpen.classList.remove('is-open');
  menuContainer.classList.add('is-open');
  buttonClose.classList.add('is-open');
}

function onButtonCloseClick() {
  buttonClose.classList.remove('is-open');
  menuContainer.classList.remove('is-open');
  buttonOpen.classList.add('is-open');
}
