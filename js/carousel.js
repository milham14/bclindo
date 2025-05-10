// carousel.js - Controls the hero carousel functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initCarousel();
});

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
    let slideInterval;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
    }
    
    // Function to show next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    // Function to show previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }
    
    // Set up click events for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });
    
    // Set up click events for prev/next buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }
    
    // Start automatic slideshow
    function startInterval() {
        slideInterval = setInterval(nextSlide, 3500); // Change slide every 5 seconds
    }
    
    // Reset interval after manual navigation
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    // Initialize slideshow
    startInterval();
}