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
const modalNextButton = document.querySelector('.modal-next');
const modalPreviousButton = document.querySelector('.modal-previous');

let galleryImageIndex = 0;

for (let i = 0; i < projectImages.length; i++) {
  projectImages[i].onclick = function () {
    imageInModal(this);
    let galleryImageIndex = 0;
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

function gallery(galleryIndexModifier) {
  alert('Inside gallery function num is: ' + num + ' galleryImageIndex is: ' + galleryImageIndex);
}

modalNextButton.onclick = function () {
  galleryFunctionality(1);
}

modalPreviousButton.onclick = function () {
  galleryFunctionality(-1);
}

function galleryFunctionality(galleryIndexModifier) {
  galleryImageIndex += galleryIndexModifier;
  let currentImageSrc = modalImage.getAttribute('src');
  if (currentImageSrc.indexOf('project-1') >= 0) {
    if (galleryImageIndex < 0) {
      galleryImageIndex = galleryOne.length - 1;
    } else if (galleryImageIndex > galleryOne.length - 1) {
      galleryImageIndex = 0;
    }
    modalHeaderText.textContent = galleryOne[galleryImageIndex][1];
    modalImage.setAttribute('src', galleryOne[galleryImageIndex][0]);
  } else if (currentImageSrc.indexOf('project-2') >= 0) {
    if (galleryImageIndex < 0) {
      galleryImageIndex = galleryTwo.length - 1;
    } else if (galleryImageIndex > galleryTwo.length - 1) {
      galleryImageIndex = 0;
    }
    modalHeaderText.textContent = galleryTwo[galleryImageIndex][1];
    modalImage.setAttribute('src', galleryTwo[galleryImageIndex][0]);
  } else if (currentImageSrc.indexOf('project-3') >= 0) {
    if (galleryImageIndex < 0) {
      galleryImageIndex = galleryThree.length - 1;
    } else if (galleryImageIndex > galleryThree.length - 1) {
      galleryImageIndex = 0;
    }
    modalHeaderText.textContent = galleryThree[galleryImageIndex][1];
    modalImage.setAttribute('src', galleryThree[galleryImageIndex][0]);
  }
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

const galleryOne = [
  ["project-photos/project-1/freeCodeCamp-portfolio.jpg", "freeCodeCamp Portfolio Top"],
  ["project-photos/project-1/freeCodeCamp-portfolio-2.jpg", "freeCodeCamp Portfolio Bottom"]
]

const galleryTwo = [
  ["project-photos/project-2/adventure-site-home.png", "My Adventures Blog"],
  ["project-photos/project-2/adventure-site-about.png", "About Page"],
  ["project-photos/project-2/adventure-stories-page.png", "Stories Page"],
  ["project-photos/project-2/adventure-gallery-upclose.jpg", "Gallery I Wrote From Scratch"]
]

const galleryThree = [
  ["project-photos/project-3/knife-site-home.png", "Knife Sharpening Home Page"],
  ["project-photos/project-3/knife-site-contact.png", "Contact Page"],
  ["project-photos/project-3/knife-site-rates.png", "Rates Page"]
]