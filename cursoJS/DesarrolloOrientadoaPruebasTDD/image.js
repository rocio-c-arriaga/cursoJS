// Crea un listener de error que cargue una imagen por defecto (dogge.jpg)
window.onload = () => {
  const image = new Image();
  image.style = 'width: 256px';
  image.src = 'invalid-image';
  //cuando sucede un evento de error agregamos el Listener
  //image.addEventListener('error', (event) => event.target.src= '../DessarrolloOrientadoaEventos/dogge.jpg')
  document.querySelector('div').append(image);
};