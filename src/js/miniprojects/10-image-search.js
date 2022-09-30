import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import ImagesApiService from './10-fetchImages';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const galleryContainer = document.querySelector('.gallery');

const lbGallery = new SimpleLightbox('.gallery a', {
  // captions: true,
  // captionsData: 'alt',
  // captionDelay: 300,
  loop: false,
});
const imagesApiService = new ImagesApiService();

searchForm.addEventListener('submit', onSearh);
loadMoreBtn.addEventListener('click', onLoadMore);
// window.addEventListener('scroll', searchOnScroll);

function onSearh(event) {
  event.preventDefault();
  clearGalleryContainer();

  imagesApiService.searchQuery =
    event.currentTarget.elements.searchQuery.value.trim();

  imagesApiService.resetPage();

  if (imagesApiService.searchQuery === '') {
    return Notify.failure(
      'Sorry, Nothing entered to search. Please try again.'
    );
  }

  imagesApiService
    .fetchImages()
    .then(images => {
      if (images.hits.length === 0) {
        return Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      Notify.success(`Hooray! We found ${images.totalHits} images.`);
      galleryContainer.innerHTML = createGallery(images);
      lbGallery.refresh();
      countMaxPages(images);

      if (imagesApiService.page !== imagesApiService.maxPages) {
        makeLoadMoreBtnVisible();
      }
    })
    .catch(onFetchError);
}

function onLoadMore() {
  imagesApiService.incremetPage();

  imagesApiService.fetchImages().then(images => {
    galleryContainer.insertAdjacentHTML('beforeEnd', createGallery(images));
    lbGallery.refresh();
  });

  if (imagesApiService.page === imagesApiService.maxPages) {
    loadLastImages();
  }
}

function createGallery(images) {
  return images.hits
    .map(hit => {
      return `
              <li class="photo-card-wrapper">
                <div class="photo-card">
                  <a href="${hit.largeImageURL}" >
                    <img
                      src="${hit.webformatURL}"
                      alt="${hit.tags}" 
                      loading="lazy" />
                  </a>  
                  <div class="info">
                    <p class="info-item">
                      <b>Likes</b>${hit.likes}
                    </p>
                    <p class="info-item">
                      <b>Views</b>${hit.views}
                    </p>
                    <p class="info-item">
                      <b>Comments</b>${hit.comments}
                    </p>
                    <p class="info-item">
                      <b>Downloads</b>${hit.downloads}
                    </p>
                  </div>
                </div>
              </li>
        `;
    })
    .join('');
}

function clearGalleryContainer() {
  galleryContainer.innerHTML = ``;
}

function countMaxPages(images) {
  if (images.totalHits % imagesApiService.perPage === 0) {
    imagesApiService.maxPages = Math.trunc(
      images.totalHits / imagesApiService.perPage
    );
  } else {
    imagesApiService.maxPages =
      Math.trunc(images.totalHits / imagesApiService.perPage) + 1;
  }

  if (imagesApiService.page === imagesApiService.maxPages) {
    loadLastImages();
  }
}

function makeLoadMoreBtnHidden() {
  loadMoreBtn.classList.add('hidden');
}

function makeLoadMoreBtnVisible() {
  loadMoreBtn.classList.remove('hidden');
}

function loadLastImages() {
  Notify.info(`We're sorry, but you've reached the end of search results.`);
  makeLoadMoreBtnHidden();
  return;
}

function onFetchError(error) {
  console.log(error);
  Notify.failure('Oops... Something was wrong, please try again.');
}

function searchOnScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight) {
    onLoadMore();
  }
}
