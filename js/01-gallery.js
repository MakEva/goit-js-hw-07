import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulGallery = document.querySelector(".gallery");

ulGallery.insertAdjacentHTML("beforeend", createItemMarkup(galleryItems));

ulGallery.addEventListener("click", imgOpenModal);

function createItemMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                 <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                 />
            </a>
        </li>`
    }).join("")
}

function imgOpenModal(evt) {
    evt.preventDefault()
    const cardItem = evt.target.closest(".gallery__image");
        if (cardItem) {
        const obj = findCurrentImg(cardItem);
          const instance = basicLightbox.create(createModal(obj));
            instance.show();
            document.addEventListener("keydown", hendlerEscKey);
                       
            function hendlerEscKey(e) {
                if (e.code === "Escape") {
                    instance.close();
                     document.removeEventListener("keydown", hendlerEscKey);
                }
            }
        }
   
}

function findCurrentImg(cardItem) {
    const source = cardItem.dataset.source;
    const currentImg = galleryItems.find(({ original }) => original === source);
    return currentImg;
}

function createModal({ original, description } = {}) {
     return `<div>
             <img src="${original}" alt="${description}"/>
          </div>` 
}


