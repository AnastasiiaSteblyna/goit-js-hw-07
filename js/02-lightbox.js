import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const gallery = galleryItems;
const galleryBox = document.querySelector(".gallery");
const galleryImages = createGallery();
galleryBox.insertAdjacentHTML("beforeend", galleryImages);

function createGallery() {
  return gallery
    .map(
      (img) => `<a class="gallery__item" href=${img.original}>
  <img class="gallery__image" src=${img.preview} alt=${img.description} title=${img.description}/>
</a>`
    )
    .join("");
}

galleryBox.addEventListener(`click`, (e) => {
  e.preventDefault();
});

new SimpleLightbox(`.gallery a`, { captionDelay: 250 });
