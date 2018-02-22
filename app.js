const hamburger = document.querySelector('.burger-container');
const navLinksContainer = document.querySelector('.nav-links-container');

hamburger.addEventListener('click', function () {
  this.classList.toggle("change");
  navLinksContainer.classList.toggle("open-nav-links");
});



// INITIALIZE SMOOTH SCROLL
var scroll = new SmoothScroll('a[href*="#"]');


// NAV HIGHLIGHT SECTION
const headerContainer = document.querySelector('#header');
const projectsContainer = document.querySelector('#projects');
const aboutContainer = document.querySelector('#about');

const navLinks = document.querySelectorAll('.nav-link');

let headerOffset = headerContainer.offsetHeight;
let projectsOffset = projectsContainer.offsetHeight + projectsContainer.offsetTop;

window.onscroll = function () {
  if (pageYOffset > projectsOffset - 400) {
    navLinks[0].classList.remove('current-link');
    navLinks[1].classList.remove('current-link');
    navLinks[2].classList.add('current-link');
  } else if (pageYOffset > headerOffset - 300) {
    navLinks[0].classList.remove('current-link');
    navLinks[1].classList.add('current-link');
    navLinks[2].classList.remove('current-link');
  } else {
    navLinks[0].classList.add('current-link');
    navLinks[1].classList.remove('current-link');
    navLinks[2].classList.remove('current-link');
  }
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function () {
    hamburger.classList.toggle("change");
    navLinksContainer.classList.toggle("open-nav-links");
  }
}

// MODAL FUNCTIONALITY
const projectImages = document.querySelectorAll('.project-image');
const modal = document.querySelector('.modal');
const modalHeaderText = document.querySelector('.modal-header-text');
const modalCloseButton = document.querySelector('.modal-close-button');
const modalImage = document.querySelector('.modal-image');

for (let i = 0; i < projectImages.length; i++) {
  projectImages[i].onclick = function () {
    imageInModal(this);
  }
}

function imageInModal(clickedImage) {
  fadeInModal();

  let selectedImageSrc = clickedImage.getAttribute('src');
  let selectedImageAlt = clickedImage.getAttribute('alt');

  modalCloseButton.onclick = function () {
    fadeOutModal();
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      fadeOutModal();
    }
  }

  modalHeaderText.textContent = selectedImageAlt;
  modalImage.setAttribute('src', selectedImageSrc);
}

function fadeInModal() {
  modal.style.visibility = 'visible';
  modal.style.opacity = 1;
}

function fadeOutModal() {
  modal.style.opacity = 0;
  setTimeout(function () {
    modalHeaderText.textContent = ''
    modalImage.setAttribute('src', '');
    modal.style.visibility = 'hidden';
  }, 250);
}