"use strict";

// ******************** CONSTANTS ********************

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// ******************** VARIABLES ********************

const banner = document.getElementById('banner');

const bannerImg = banner.querySelector('.banner-img');

const bannerCaption = banner.querySelector('p');

const arrowLeft = banner.querySelector('.arrow_left');

const arrowRight = banner.querySelector('.arrow_right');

const dotsContainer = document.querySelector('.dots');

for (let i = 0; i < 4; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
}

let currentIndex = 0;

// ******************** FUNCTIONS ********************

// Fonction pour mettre à jour le contenu du carrousel

function updateCarousel(index) {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerImg.alt = `Banner Print-it ${index + 1}`;
	bannerCaption.innerHTML = slide.tagLine;
	
	// Mettre à jour les classes active/inactive des dots
	dotsContainer.querySelectorAll('.dot').forEach(dotElement => {
	  dotElement.classList.remove('active');
	});
	
  }
  

// ******************** MAIN ********************

// Afficher le premier slide par défaut
updateCarousel(currentIndex);

// Gestion des clics sur les flèches de navigation
arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});

arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

// Gestion des clics sur les dots
slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === currentIndex) {
    dot.classList.add('active');
  }


  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});