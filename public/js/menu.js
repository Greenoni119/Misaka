// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Activate initial animations on load
window.addEventListener('load', () => {
  document.querySelectorAll('.menu-header .fade-up').forEach(el => {
    el.classList.add('active');
  });
});

// Menu navigation toggle
const menuNav = document.getElementById('menu-nav');
const menuNavHeader = document.getElementById('menu-nav-header');

menuNavHeader.addEventListener('click', () => {
  menuNav.classList.toggle('expanded');
});

// Close menu nav when clicking links
document.querySelectorAll('.menu-nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuNav.classList.remove('expanded');
  });
});

// Change menu nav style on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    menuNav.classList.add('scrolled');
  } else {
    menuNav.classList.remove('scrolled');
  }
});

// Auto-highlight current section in menu nav
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 300)) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.menu-nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});