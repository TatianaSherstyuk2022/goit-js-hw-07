import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".js-gallery");
// const galleryItemEl = document.querySelector('.gallery__link')

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join("");
  return markup;
}

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', { overlay: '2500ms' });
