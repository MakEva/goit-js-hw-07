import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector(".gallery");

ulGallery.insertAdjacentHTML("beforeend", createItemMarkup(galleryItems));

ulGallery.addEventListener("click", imgOpenModal);

function createItemMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    }).join("")
}
let gallery = new SimpleLightbox(".gallery a",
        {   captionsData: "alt",
            captionPosition: 'bottom',
            captionDelay: 250
        });
    gallery.on('show.simplelightbox', () => createModal());

function imgOpenModal(evt) {
    evt.preventDefault();
}
    
function createModal({ original, description } = {}) {
    return `<div>
             <img src="${original}" alt="${description}"/>
          </div>`;
}




