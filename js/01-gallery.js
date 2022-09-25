import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = galleryItems;
const galleryBox = document.querySelector(".gallery");
const galleryImages = createGallery();
galleryBox.insertAdjacentHTML("beforeend", galleryImages);

function createGallery() {
  return gallery
    .map(
      (img) => `<div class="gallery__item">
  <a class="gallery__link" href=${img.original}>
    <img
      class="gallery__image"
      src=${img.preview}
      data-source=${img.original}
      alt=${img.description}
    />
  </a>
</div>`
    )
    .join("");
}

galleryBox.addEventListener(`click`, (e) => {
  e.preventDefault();

  const instance = basicLightbox.create(`
    <img src= "${e.target.dataset.source}">
`);

  instance.show();

  window.addEventListener(`keydown`, onEscapeClose);

  function onEscapeClose(e) {
    if (e.code !== "Escape") return;
    instance.close();
    window.removeEventListener(`keydown`, onEscapeClose);
  }
});
