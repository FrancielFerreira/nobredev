const galeria = document.querySelectorAll("#galeria img");
const galeriaContainer = document.querySelector(".galeria-container");
const galeriaImg = galeriaContainer.querySelector("img");
const galeriaImgCaption = galeriaContainer.querySelector("figcaption");
const btnCloseGaleria = galeriaContainer.querySelector("#close-galeria");
const btnPrev = galeriaContainer.querySelector("#imgPrev");
const btnNext = document.querySelector("#imgNext");
const btnToogleImg = document.querySelectorAll(".galeria-controls button");
const totalImg = galeria.length - 1;

function toggleImgAttr(index) {
  btnNext.addEventListener("click", () => {
    index++;
    index > totalImg ? index = 0 : 0
    getImgAttr(index);
  });
  btnPrev.addEventListener("click", () => {
    index--;
    index < 0 ? index = totalImg : 0;
    getImgAttr(index);
  });
}

function getImgAttr(index) {
  const currentImgSrc = galeria[index].getAttribute("src");
  const currentImgAlt = galeria[index].getAttribute("alt");
  galeriaContainer.classList.add("ativo");
  galeriaImg.setAttribute("src", currentImgSrc);
  galeriaImg.setAttribute("alt", currentImgAlt);
  galeriaImgCaption.innerText = currentImgAlt;
}

function activeGaleria(index) {
  galeria.forEach(img => img.classList.remove("ativo"));
  getImgAttr(index);
  toggleImgAttr(index);
}

Array.from(galeria).forEach((img, index) => img.addEventListener("click", () => activeGaleria(index)));

function closeGaleriaContainer(e) {
  e.target === this || e.target === btnCloseGaleria ? galeriaContainer.classList.remove("ativo") : 0;
}

galeriaContainer.addEventListener("click", closeGaleriaContainer);
