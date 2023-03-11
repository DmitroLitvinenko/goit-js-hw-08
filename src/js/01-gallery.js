// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const galleryContainer = document.querySelector('.gallery');


const imgElements = galleryItems.map( ({original, preview, description} )  => {
    return `
    <li class="gallery">
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
    </li>
    
  </div>`}).join('');

  galleryContainer.insertAdjacentHTML('beforeend', imgElements);


galleryContainer.addEventListener( 'click', onGalleryElementClick)

function onGalleryElementClick(event) {
    event.preventDefault();
    
    if(event.target.nodeName !== 'IMG') {
        return;
}
};

new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250,
captionPosition: 'bottom',
captionType: 'attr', });

console.log(galleryItems);
