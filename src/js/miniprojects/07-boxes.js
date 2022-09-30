// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const inputValue = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const div = document.querySelector('#boxes');

let count = 0;

inputValue.addEventListener('blur', getCount);
btnCreate.addEventListener('click', onCreate);
btnDestroy.addEventListener('click', onDestroy);

function getCount(event) {
  count = Number(event.currentTarget.value);
}

function onCreate() {
  let sizeValue = 30;

  for (let i = 0; i < count; i += 1) {
    const element = document.createElement('div');

    element.classList = 'boxes__item';
    element.style.marginTop = '10px';
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${sizeValue}px`;
    element.style.height = `${sizeValue}px`;

    sizeValue += 10;

    div.append(element);
  }
}

function onDestroy() {
  const creatingDiv = document.querySelectorAll('.boxes__item');
  creatingDiv.forEach(element => {
    element.remove();
    inputValue.value = '';
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
