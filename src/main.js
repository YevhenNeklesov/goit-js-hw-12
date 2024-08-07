
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImageBySearch } from './js/pixabay-api'
import { createGallery } from './js/render-functions'


const refs = {
    loader: document.querySelector('.loader'),
    searchInput: document.querySelector('.search-form'),
    loadMore: document.querySelector('.load-btn'),
    gallery: document.querySelector('.gallery'),
};

refs.searchInput.addEventListener('submit', addImageBySearch)

const params = {
    searchInput: '',
    page: 1,
    perPage: 15,
    totalPages: 0,
}





async function addImageBySearch(event) {
    event.preventDefault();
    refs.gallery.innerHTML = '';
    params.page = 1;
    refs.loader.classList.add('hidden');
    refs.loadMore.classList.add('is-hidden')
    
    params.searchInput = event.target.elements.search.value.trim();
    if (params.searchInput === "") {
        iziToast.error({
            message:
                'Please entry the search!',
            position: 'topRight',
            timeout: 2000,
            icon: '',
        });
        event.currentTarget.reset();
        return
    }


    try {
      const totalResults = await getImageBySearch(params);
      
      if (totalResults.hits.length === 0) {
        iziToast.error({
            message:
                `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
            timeout: 2000,
            icon: '',
        })
      }

      params.totalPages = Math.ceil(totalResults.totalHits / params.perPage);
      createGallery(totalResults.hits);
      
        if (params.totalPages > 1) {
            refs.loadMore.classList.remove('is-hidden')
            refs.loadMore.addEventListener("click", handleLoadMore)
        } else {
            refs.loadMore.classList.add('is-hidden')
        }   
    }

    catch(error) {
        iziToast.error({
            message:
                `An error has occurred: ${error}`,
            position: 'topRight',
            timeout: 2000,
            icon: '',
        });
    }

    finally {
            event.target.reset();
            refs.loader.classList.add('hidden');
    }
}


async function handleLoadMore(event) {
    refs.loadMore.classList.add('is-hidden')
    refs.loader.classList.remove('hidden');
    params.page += 1;

    try {
        const nextPages = await getImageBySearch(params)
        createGallery(nextPages.hits) 
    }

    catch (error) {
    iziToast.error({
      message: `An error has occurred:: ${error}`,
      position: 'topRight',
      timeout: 2000,
    });
    }
    
    finally {
    refs.loader.classList.add('hidden');
    const galleryItemHeight = document
      .querySelector('.gallery-item')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: galleryItemHeight * 2,
      left: 0,
      behavior: "smooth",
    });

    if (params.page === params.totalPages) {
      refs.loadMore.classList.add('is-hidden');
      iziToast.info({
        message: 'We`re sorry, but you`ve reached the end of search results.',
        position: 'topRight',
        timeout: 2000,
        icon: '',
      });
        refs.loadMore.removeEventListener('click', handleLoadMore);
    } else {
      refs.loadMore.classList.remove('is-hidden');
    }
  }
}

