import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".js-gallery");
// const galleryItemEl = document.querySelector('.gallery__link')

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>
        `;
    })
    .join("");
  return markup;
}

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

const onGalleryItemElClick = (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== "IMG") {
    return;
  }

  const bannerUrl = target.dataset.source;

  const galleryBigItemEl = basicLightbox.create(`
    <img src="${bannerUrl}" width="800" height="600">
`);

  galleryBigItemEl.show();
};

container.addEventListener("click", onGalleryItemElClick);
