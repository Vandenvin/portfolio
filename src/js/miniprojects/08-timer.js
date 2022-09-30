import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const inputDate = document.querySelector('input');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

const outputDays = document.querySelector('[data-days]');
const outputHours = document.querySelector('[data-hours]');
const outputMinutes = document.querySelector('[data-minutes]');
const outputSeconds = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

let finishDate = 0;
let counter = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    finishDate = selectedDates[0].getTime();
    checkSelectedDate();
  },
};

flatpickr(inputDate, options);

function checkSelectedDate() {
  const currendDateForCheck = Date.now();

  if (finishDate > currendDateForCheck) {
    Notify.success('Сorrect date in the future has been selected');
    btnStart.removeAttribute('disabled');

    return;
  }

  if (finishDate <= currendDateForCheck) {
    Notify.failure('Please choose a date in the future');
    return;
  }
}

function onBtnStartClick() {
  const currendDateForCoutdown = Date.now();
  counter = finishDate - currendDateForCoutdown;

  Notify.info('Сountdown is started');
  btnStart.setAttribute('disabled', 'true');
  btnStop.removeAttribute('disabled');
  inputDate.setAttribute('disabled', 'true');

  timerId = setInterval(() => {
    counter -= 1000;
    const { days, hours, minutes, seconds } = convertMs(counter);

    console.log(`${days}:${hours}:${minutes}:${seconds}`);
    outputDays.textContent = `${days}`;
    outputHours.textContent = `${hours}`;
    outputMinutes.textContent = `${minutes}`;
    outputSeconds.textContent = `${seconds}`;

    if (counter < 1000) {
      clearInterval(timerId);
      Notify.success('Сountdown completed successfully!');
      btnStop.setAttribute('disabled', 'true');
      inputDate.removeAttribute('disabled');
      return;
    }
  }, 1000);
}

function onBtnStopClick() {
  Notify.info('Сountdown is stopped');
  counter = 0;
  clearInterval(timerId);

  btnStart.setAttribute('disabled', 'true');
  btnStop.setAttribute('disabled', 'true');
  inputDate.removeAttribute('disabled');

  flatpickr(inputDate, options).destroy();
  flatpickr(inputDate, options);

  outputDays.textContent = '00';
  outputHours.textContent = '00';
  outputMinutes.textContent = '00';
  outputSeconds.textContent = '00';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
