// Initialize AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 800, // Animation duration in ms
    easing: "ease-out", // Animation easing
    once: false, // Whether animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them
    offset: 120, // Offset (in px) from the original trigger point
    delay: 0, // Default delay before animation starts
    anchorPlacement: "top-bottom", // Define which position of the element regarding to window should trigger the animation
  });
});
