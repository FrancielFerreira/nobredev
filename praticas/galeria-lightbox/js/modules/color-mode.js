export default function initColorMode() {
  const preload = document.querySelector('.loader_bg') 
  const img = document.querySelector('#galeria')
  window.addEventListener('load', () => preload.style.display = 'none') 
}