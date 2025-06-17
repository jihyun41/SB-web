const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slides li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const totalSlides = slideItems.length;
let currentIdx = 1;
let isAnimating = false;

const firstClone = slideItems[0].cloneNode(true);
const lastClone = slideItems[totalSlides - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideItems[0]);

const newSlideItems = document.querySelectorAll('.slides li');
slides.style.transform = `translateX(-${100 * currentIdx}%)`;

function goToSlide(index) {
  if (isAnimating) return;
  isAnimating = true;
  slides.style.transition = 'transform 0.5s ease';
  slides.style.transform = `translateX(-${100 * index}%)`;
  currentIdx = index;

  setTimeout(() => {
    if (currentIdx === totalSlides + 1) {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-100%)`;
      currentIdx = 1;
    } else if (currentIdx === 0) {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-${100 * totalSlides}%)`;
      currentIdx = totalSlides;
    }
    isAnimating = false;
  }, 500);
}

prev.addEventListener('click', () => {
  goToSlide(currentIdx - 1);
});

next.addEventListener('click', () => {
  goToSlide(currentIdx + 1);
});

setInterval(() => {
  goToSlide(currentIdx + 1);
}, 5000);