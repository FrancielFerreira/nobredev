export default function initColorMode() {
  const preload = document.querySelector('.loader_bg') 
  const img = document.querySelector('#galeria')
  // setTimeout(function(){
  //         preload.style.display = 'none';
  // }, 2000); // com setTimout
  window.addEventListener('load', () => preload.style.display = 'none') // ao carregar a página
}