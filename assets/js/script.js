const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function changeSlideColor(colorPicker) {
    var slide = colorPicker.parentNode;
    slide.style.backgroundColor = colorPicker.value;
}