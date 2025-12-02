/*Interactividad para el carrusel*/
const carouselInner = document.querySelector('.carrusel-inner');
const images = document.querySelectorAll('.carrusel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Función para cambiar slide
function goToSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    carruselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
}

// Función para actualizar indicadores
function updateIndicators() {
    indicators.forEach((ind, index) => {
        ind.classList.toggle('active', index === currentSlide);
    });
}

// Botones siguiente/anterior
document.querySelector('.next').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

// Indicadores clickables
indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        goToSlide(parseInt(e.target.dataset.slide));
    });
});

// Auto-avance (opcional)
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 6000);

// Teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
});