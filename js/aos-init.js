// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: false,
    mirror: false,
    offset: 120,
    delay: 0,
    anchorPlacement: "top-bottom",
  });
});