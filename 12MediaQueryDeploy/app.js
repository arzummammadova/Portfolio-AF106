let index = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = totalSlides - 1;
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.forEach((slide, i) => {
        slide.style.transform = 'translateX(' + (-index * 100) + '%)';
    });
}
