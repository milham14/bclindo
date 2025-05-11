// Tambahan efek scroll untuk melengkapi AOS
document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk mengecek apakah elemen dalam viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Fungsi untuk menambahkan kelas 'visible' ke elemen yang terlihat
  function handleScrollAnimation() {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("visible");
      }
    });
  }

  // Tambahkan kelas 'animate-on-scroll' ke elemen yang ingin dianimasikan
  const addAnimationClasses = () => {
    // Highlight items
    document.querySelectorAll(".highlight-item").forEach((item) => {
      item.classList.add("animate-on-scroll");
    });

    // About section
    document
      .querySelectorAll(".about-image, .about-content")
      .forEach((item) => {
        item.classList.add("animate-on-scroll");
      });

    // Client items
    document.querySelectorAll(".client-item").forEach((item) => {
      item.classList.add("animate-on-scroll");
    });

    // Award items
    document.querySelectorAll(".award-item").forEach((item) => {
      item.classList.add("animate-on-scroll");
    });

    // CTA section
    document.querySelectorAll(".cta-section").forEach((item) => {
      item.classList.add("animate-on-scroll");
    });

    // Footer content
    document
      .querySelectorAll(".footer-logo, .footer-contact, .footer-links")
      .forEach((item) => {
        item.classList.add("animate-on-scroll");
      });
  };

  // Jalankan fungsi
  addAnimationClasses();

  // Jalankan animasi saat halaman dimuat
  handleScrollAnimation();

  // Jalankan animasi saat scroll
  window.addEventListener("scroll", handleScrollAnimation);
});
