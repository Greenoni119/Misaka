// Activate hero animations on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .fade-up').forEach(el => {
    el.classList.add('active');
  });
});