document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burger-btn');
  const mainNav = document.querySelector('.main-nav');
  const subNav = document.querySelector('.sub-nav');
  const overlay = document.getElementById('overlay');

  burgerBtn.addEventListener('click', function() {
    mainNav.classList.toggle('active');  // Toggle main nav visibility
    subNav.classList.toggle('active');   // Toggle sub-nav visibility
    overlay.classList.toggle('active');  // Toggle overlay visibility
  });

  overlay.addEventListener('click', function() {
    mainNav.classList.remove('active');
    subNav.classList.remove('active');
    overlay.classList.remove('active');
  });
});
