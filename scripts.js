window.addEventListener('DOMContentLoaded', () => {
  const aboutText = document.querySelector('.about-text');
  if(aboutText){ aboutText.style.opacity = '1'; aboutText.style.transform = 'translateY(0)'; }


  });
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

