const career1 = document.querySelector('.js-career-1');
const career1Info = document.querySelector('.career-info-1');

const career2 = document.querySelector('.js-career-2');
const career2Info = document.querySelector('.career-info-2');

const career3 = document.querySelector('.js-career-3');
const career3Info = document.querySelector('.career-info-3');

const career4 = document.querySelector('.js-career-4');
const career4Info = document.querySelector('.career-info-4');

const career5 = document.querySelector('.js-career-5');
const career5Info = document.querySelector('.career-info-5');

career1.addEventListener('click', onCareer1Click);
career2.addEventListener('click', onCareer2Click);
career3.addEventListener('click', onCareer3Click);
career4.addEventListener('click', onCareer4Click);
career5.addEventListener('click', onCareer5Click);

function onCareer1Click() {
  if (!career2Info.classList.contains('hidden')) {
    career2Info.classList.add('hidden');
  }
  if (!career3Info.classList.contains('hidden')) {
    career3Info.classList.add('hidden');
  }
  if (!career4Info.classList.contains('hidden')) {
    career4Info.classList.add('hidden');
  }
  if (!career5Info.classList.contains('hidden')) {
    career5Info.classList.add('hidden');
  }

  if (career1.classList.contains('active')) {
    career1.classList.remove('active');
  }
  if (career2.classList.contains('active')) {
    career2.classList.remove('active');
  }
  if (career3.classList.contains('active')) {
    career3.classList.remove('active');
  }
  if (career4.classList.contains('active')) {
    career4.classList.remove('active');
  }
  if (career5.classList.contains('active')) {
    career5.classList.remove('active');
  }

  career1.classList.add('active');
  career1Info.classList.remove('hidden');
  window.scrollTo(0, 0);
}

function onCareer2Click() {
  if (!career1Info.classList.contains('hidden')) {
    career1Info.classList.add('hidden');
  }
  if (!career3Info.classList.contains('hidden')) {
    career3Info.classList.add('hidden');
  }
  if (!career4Info.classList.contains('hidden')) {
    career4Info.classList.add('hidden');
  }

  if (!career5Info.classList.contains('hidden')) {
    career5Info.classList.add('hidden');
  }

  if (career1.classList.contains('active')) {
    career1.classList.remove('active');
  }
  if (career2.classList.contains('active')) {
    career2.classList.remove('active');
  }
  if (career3.classList.contains('active')) {
    career3.classList.remove('active');
  }
  if (career4.classList.contains('active')) {
    career4.classList.remove('active');
  }
  if (career5.classList.contains('active')) {
    career5.classList.remove('active');
  }

  career2.classList.add('active');
  career2Info.classList.remove('hidden');
  window.scrollTo(0, 0);
}

function onCareer3Click() {
  if (!career1Info.classList.contains('hidden')) {
    career1Info.classList.add('hidden');
  }
  if (!career2Info.classList.contains('hidden')) {
    career2Info.classList.add('hidden');
  }
  if (!career4Info.classList.contains('hidden')) {
    career4Info.classList.add('hidden');
  }
  if (!career5Info.classList.contains('hidden')) {
    career5Info.classList.add('hidden');
  }

  if (career1.classList.contains('active')) {
    career1.classList.remove('active');
  }
  if (career2.classList.contains('active')) {
    career2.classList.remove('active');
  }
  if (career3.classList.contains('active')) {
    career3.classList.remove('active');
  }
  if (career4.classList.contains('active')) {
    career4.classList.remove('active');
  }
  if (career5.classList.contains('active')) {
    career5.classList.remove('active');
  }

  career3.classList.add('active');
  career3Info.classList.remove('hidden');
  window.scrollTo(0, 0);
}

function onCareer4Click() {
  if (!career1Info.classList.contains('hidden')) {
    career1Info.classList.add('hidden');
  }
  if (!career2Info.classList.contains('hidden')) {
    career2Info.classList.add('hidden');
  }
  if (!career3Info.classList.contains('hidden')) {
    career3Info.classList.add('hidden');
  }
  if (!career5Info.classList.contains('hidden')) {
    career5Info.classList.add('hidden');
  }

  if (career1.classList.contains('active')) {
    career1.classList.remove('active');
  }
  if (career2.classList.contains('active')) {
    career2.classList.remove('active');
  }
  if (career3.classList.contains('active')) {
    career3.classList.remove('active');
  }
  if (career4.classList.contains('active')) {
    career4.classList.remove('active');
  }
  if (career5.classList.contains('active')) {
    career5.classList.remove('active');
  }

  career4.classList.add('active');
  career4Info.classList.remove('hidden');
  window.scrollTo(0, 0);
}

function onCareer5Click() {
  if (!career1Info.classList.contains('hidden')) {
    career1Info.classList.add('hidden');
  }
  if (!career2Info.classList.contains('hidden')) {
    career2Info.classList.add('hidden');
  }
  if (!career3Info.classList.contains('hidden')) {
    career3Info.classList.add('hidden');
  }
  if (!career4Info.classList.contains('hidden')) {
    career4Info.classList.add('hidden');
  }

  if (career1.classList.contains('active')) {
    career1.classList.remove('active');
  }
  if (career2.classList.contains('active')) {
    career2.classList.remove('active');
  }
  if (career3.classList.contains('active')) {
    career3.classList.remove('active');
  }
  if (career4.classList.contains('active')) {
    career4.classList.remove('active');
  }
  if (career5.classList.contains('active')) {
    career5.classList.remove('active');
  }

  career5.classList.add('active');
  career5Info.classList.remove('hidden');
  window.scrollTo(0, 0);
}
