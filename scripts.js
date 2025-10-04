window.addEventListener('load', () => {
  const aboutText = document.querySelector('.about-text');
  aboutText.style.opacity = '1';
  aboutText.style.transform = 'translateY(0)';
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
