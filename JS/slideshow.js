const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slides li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const totalSlides = slideItems.length;
let currentIdx = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentIdx = index;
}

prev.addEventListener('click', () => {
  if (currentIdx > 0) goToSlide(currentIdx - 1);
});

next.addEventListener('click', () => {
  if (currentIdx < totalSlides - 1) goToSlide(currentIdx + 1);
});

setInterval(() => {
  currentIdx = (currentIdx + 1) % totalSlides;
  goToSlide(currentIdx);
}, 5000);