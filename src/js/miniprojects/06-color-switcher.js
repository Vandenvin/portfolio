const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

let timerId = null;
let currentColor = '#ffffff';

function onBtnStartClick() {
  console.log('Start color change');

  timerId = setInterval(colorChange, 1000);

  btnStart.setAttribute('disabled', 'true');
  btnStop.removeAttribute('disabled');
}

function colorChange() {
  currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  console.log('Body-color: ', currentColor);
}

function onBtnStopClick() {
  clearInterval(timerId);

  console.log('Stop color change');

  btnStop.setAttribute('disabled', 'true');
  btnStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
