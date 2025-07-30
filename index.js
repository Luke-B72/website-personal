
let band = document.querySelector('.band');
let box = document.querySelector('.box');
band.onclick = function () {
  box.classList.toggle('active');
}


// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick =  (e) => {
  e.preventDefault();
  navbarNav.classList.toggle('active');
  e.stopPropagation();
};

document.addEventListener('click', function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

feather.replace();





document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);

    target.classList.toggle('show');
    this.classList.toggle('active');
  });
});

// Carousel Logic
const slideIndexes = {};

function moveSlide(carouselId, step) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelectorAll('img');
  const totalSlides = slides.length;

  if (slideIndexes[carouselId] === undefined) {
    slideIndexes[carouselId] = 0;
  }

  slideIndexes[carouselId] += step;

  if (slideIndexes[carouselId] < 0) slideIndexes[carouselId] = totalSlides - 1;
  if (slideIndexes[carouselId] >= totalSlides) slideIndexes[carouselId] = 0;

  const offset = slideIndexes[carouselId] * -100;
  carousel.style.transform = `translateX(${offset}%)`;
}


function redirWhatsapp1() {
  window.location.href = "https://wa.me/+6289676127701"
}

function redirWhatsapp2() {
  window.location.href = "https://wa.me/+628562009347"
}
function redirHome1() {
  window.location.href = "index.html"
}

function redirFacebook1() {
  window.location.href = "https://web.facebook.com/p/Klinik-Lamaran-100067180604740/?_rdc=1&_rdr#"
}

function redirInstagram1() {
  window.location.href = "https://www.instagram.com/kliniklamaraninfo/"
}