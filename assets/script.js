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

const dotsSelected = document.querySelector('.dot_selected');

let currentIndex = 0;

for (let i = 0; i < 4; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
  
	// Ajouter la classe "dot_selected" au premier dot
	if (i === 0) {
	  dot.classList.add('dot_selected');
	}
}


// ******************** FUNCTIONS ********************

// mise a jour de l'image du carrousel
function updateCarousel(index) {
  const slide = slides[index];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  bannerImg.alt = `Banner Print-it ${index + 1}`;
  bannerCaption.innerHTML = slide.tagLine;
  updateDots(index);
}

//mise a jour des dots 
function updateDots(index) {
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dotElement, dotIndex) => {
    if (dotIndex === index) {
      dotElement.classList.add('dot_selected');
    } else {
      dotElement.classList.remove('dot_selected');
    }
  });
}

// ******************** MAIN ********************

// fleche de gauche
arrowLeft.addEventListener('click', function() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateCarousel(currentIndex);
  });
  
  // fleche de droite
  arrowRight.addEventListener('click', function() {
	currentIndex = (currentIndex + 1) % slides.length;
	updateCarousel(currentIndex);
  });

