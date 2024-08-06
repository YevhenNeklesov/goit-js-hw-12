


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const galleryContainer = new SimpleLightbox('.gallery-item a', { 
    className: 'js-lightbox',
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
});
 

export const createGallery = (data) => {
    const markup = data
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) =>
`<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
			class="gallery-image"
			src="${webformatURL}"
			alt="${tags}"
			/>
        <div class="stats">
            <h3 class="stats-title">Likes
             <p class="stats-value">${likes}</p>
             </h3>
            <h3 class="stats-title">Views
             <p class="stats-value">${views}</p>
             </h3>
            <h3 class="stats-title">Comments
             <p class="stats-value">${comments}</p>
             </h3>
            <h3 class="stats-title">Downloads
             <p class="stats-value">${downloads}</p>
             </h3>
        </div>
	</a>
</li>`
    ).join('')
    gallery.insertAdjacentHTML('beforeend', markup);
    galleryContainer.refresh()
}