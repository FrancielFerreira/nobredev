const carrosel = document.querySelectorAll(".carrousel-item");
const btnVoltar = document.querySelector(".btn-voltar");
const btnProximo = document.querySelector(".btn-proximo");
const dots = document.querySelectorAll(".carrosel-dots span")
let slides = carrosel.length - 1;
let count = 0;
dots[count].classList.add("ativo")

function proximoSlide() {
  carrosel[count].classList.remove("ativo");
  dots[count].classList.remove("ativo");
  count++;
  count > slides ? (count = 0) : 0;
  carrosel[count].classList.add("ativo");
  dots[count].classList.add("ativo");
}

function voltaSlide() {
  carrosel[count].classList.remove("ativo");
  dots[count].classList.remove("ativo");
  count--;
  count < 0 ? (count = slides) : 0;
  carrosel[count].classList.add("ativo");
  dots[count].classList.add("ativo");
}

function iniciarSlide() {
  setInterval(() => proximoSlide(), 5000);
}

btnProximo.addEventListener("click", proximoSlide);
btnVoltar.addEventListener("click", voltaSlide);
window.addEventListener("load", iniciarSlide);
