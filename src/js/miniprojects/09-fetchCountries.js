export default function fetchCountries(countryName) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=flags,name,capital,population,languages`
  ).then(response => {
    if (!response.ok) {
      throw Error('Error');
    }
    return response.json();
  });
}
