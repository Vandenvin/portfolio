import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import fetchCountries from './09-fetchCountries';

const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
  const searchQuery = event.target.value.trim();
  //   console.log(searchQuery);

  if (searchQuery === '') {
    countryInfo.innerHTML = clearMarkup();
    countryList.innerHTML = clearMarkup();
    return;
  }

  fetchCountries(searchQuery).then(renderCountry).catch(onFetchError);
}

function renderCountry(country) {
  //   console.log(country);

  const countOfCountries = country.length;

  if (countOfCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    countryInfo.innerHTML = clearMarkup();
    countryList.innerHTML = clearMarkup();
  }

  if (countOfCountries === 1) {
    countryInfo.innerHTML = createCountryCard(country);
    countryList.innerHTML = clearMarkup();
  }

  if (countOfCountries > 1 && countOfCountries <= 10) {
    countryList.innerHTML = createListOfCountry(country);
    countryInfo.innerHTML = clearMarkup();
  }
}

function onFetchError(error) {
  Notify.failure('Oops, there is no country with that name');
  countryInfo.innerHTML = clearMarkup();
  countryList.innerHTML = clearMarkup();
}

function createListOfCountry(countries) {
  return countries
    .map(country => {
      return `
        <li class="country-list__item">
            <img class="country__flag" 
            src="${country.flags.png}" 
            alt="Flag" width=20>
            <p>${country.name.official}</p>
        </li>
        `;
    })
    .join('');
}

function createCountryCard(country) {
  return `
        <div class="country__name">
            <img class="country__flag" 
            src="${country[0].flags.png}" 
            alt="Flag" width=50>
            <h1>${country[0].name.official}</h1>
        </div>
        <p>
            <span class="country__label">Capital: </span>
            ${country[0].capital}
        </p>
        <p>
            <span class="country__label">Population: </span>
            ${country[0].population}
        </p>
        <p>
            <span class="country__label">Languages: </span>
            ${Object.values(country[0].languages)}
        </p>
        `;
}

function clearMarkup() {
  return ` `;
}
