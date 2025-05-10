// carousel.js - Controls the hero carousel functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initCarousel();
});

function initCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  // 🛑 Stop here if no carousel found
  if (slides.length === 0 || dots.length === 0) {
    return; // Exit function safely
  }

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    if (!slides[index] || !dots[index]) return; // Safety check

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetInterval();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });
  }

  function startInterval() {
    slideInterval = setInterval(nextSlide, 3500);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  startInterval(); // Start only if carousel exists
}
