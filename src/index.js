const headerIconTel = document.querySelector('.js-header-icon-tel');
const headerIconMail = document.querySelector('.js-header-icon-mail');
const headerMail = document.querySelector('.js-header-mail');
const headerTel = document.querySelector('.js-header-tel');

headerIconTel.addEventListener('click', onHeaderIconTelClick);
headerIconMail.addEventListener('click', onHeaderIconMailClick);

function onHeaderIconTelClick() {
  headerMail.classList.add('hidden');
  headerTel.classList.toggle('hidden');
}
function onHeaderIconMailClick() {
  headerTel.classList.add('hidden');
  headerMail.classList.toggle('hidden');
}
