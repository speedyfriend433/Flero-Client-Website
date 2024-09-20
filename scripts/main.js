// Initialize AOS for animations
AOS.init({
  duration: 1200,
  once: true,
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
