const headerSection = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const rect = headerSection.getBoundingClientRect();

  // rect.top <= 0 means header reached sticky position
  if (rect.top <= 0) {
    // header is sticking to top
    headerSection.classList.add('scrolled');
  } else {
    // header is in its original place, remove shadow immediately
    headerSection.classList.remove('scrolled');
  }
});