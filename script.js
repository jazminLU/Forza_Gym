// Función para detener el scroll horizontal al hacer click en el carrusel
const carousel = document.querySelector('.carousel');
carousel.addEventListener('click', () => {
  carousel.classList.toggle('scroll-lock');
});
