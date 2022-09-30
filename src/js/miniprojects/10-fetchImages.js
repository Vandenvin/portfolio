const axios = require('axios').default;
const API_KEY = '29926822-e010085104708a67d75f2365e';
const BASE_URL = 'https://pixabay.com/api';

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
    this.maxPages = 0;
  }

  // Асинхронный fetch с помощью библиотекы AXIOS
  async fetchImages() {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incremetPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

// Обычный fetch
// fetchImages() {
//   return fetch(
//     `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
//   ).then(response => {
//     if (!response.ok) {
//       throw Error('Error');
//     }
//     return response.json();
//   });
// }

// Асинхронный fetch
// async fetchImages() {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
//     );

//     const images = await response.json();
//     console.log(images);
//     return images;
//   } catch (error) {
//     console.log(error);
//   }
// }
