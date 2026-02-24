// script.js
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.header-container');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});