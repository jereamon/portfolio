const hamburger = document.querySelector('.burger-container');
const navLinksContainer = document.querySelector('.nav-links-container');

hamburger.addEventListener('click', function () {
  this.classList.toggle("change");
  navLinksContainer.classList.toggle("open-nav-links");
});