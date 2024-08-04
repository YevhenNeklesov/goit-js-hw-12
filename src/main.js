
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImageBySearch } from './js/pixabay-api'
import { createGallery } from './js/render-functions'
import { gallery } from "./js/render-functions";



const loader = document.querySelector('.loader')
const searchForm = document.querySelector('.search-form')
searchForm.addEventListener('submit', addImageBySearch)

function addImageBySearch (event) {
    event.preventDefault();
    gallery.innerHTML = '';
    loader.classList.remove('hidden');
    const searchInput = event.target.elements.search.value.trim().toLowerCase();
    if (!searchInput) {
        loader.classList.add('hidden');
    } else {
        getImageBySearch(searchInput)
            .then(data => {
                if (data.hits.length === 0) {
                    iziToast.error({
                        message:
                            'Sorry, there are no images matching your search query. Please try again!',
                        position: 'topRight',
                        timeout: 2000,
                        icon: '',
                    });
                }

        createGallery(data.hits);
      })
      .catch(error => alert("An error has occurred: " + error.message))
      .finally(() => {
        event.target.reset();
        loader.classList.add('hidden');
      });
  }
}
