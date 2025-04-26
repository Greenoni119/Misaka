// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#nav-menu');
const overlay = document.querySelector('#overlay');

hamburger.addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  navMenu.classList.toggle('show');
  overlay.classList.toggle('show');
  this.setAttribute('aria-expanded', !isExpanded);
  document.body.style.overflow = !isExpanded ? 'hidden' : '';
});

overlay.addEventListener('click', function() {
  navMenu.classList.remove('show');
  overlay.classList.remove('show');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
});

// Close menu when a link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', function() {
    navMenu.classList.remove('show');
    overlay.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Header scroll effect
const header = document.querySelector('#header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Fade-in animations on scroll
const fadeElements = document.querySelectorAll('.fade-up');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1
});

fadeElements.forEach(element => {
  fadeInObserver.observe(element);
});