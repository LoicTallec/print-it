"use strict";

// ******************** CONSTANTS ********************

// Array of objects representing each slide in the carousel
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

// Selecting elements from the DOM
const banner        = document.querySelector('#banner'); // The main banner container
const bannerImg     = document.querySelector('.banner-img'); // The image element within the banner
const bannerCaption = document.querySelector('#banner p'); // The caption element within the banner
const arrowLeft     = document.querySelector('.arrow_left'); // The left arrow button
const arrowRight    = document.querySelector('.arrow_right'); // The right arrow button
const dotsContainer = document.querySelector('.dots'); // The container for the dots indicating the slide index
const dotsSelected  = document.querySelector('.dot_selected'); // The currently selected dot

// ******************** VARIABLES ********************

let currentIndex = 0; // The index of the currently displayed slide

// ******************** FUNCTIONS ********************

/**
 * Updates the carousel with the slide at the specified index.
 *
 * @param {number} index - The index of the slide to be displayed.
 */
function updateCarousel(index) {
  const slide = slides[index];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  bannerImg.alt = `Banner Print-it ${index + 1}`;
  bannerCaption.innerHTML = slide.tagLine;
  updateDots(index);
}

/**
 * Update the dots in the dotsContainer based on the given index.
 *
 * @param {number} index - The index of the dot to be selected.
 */
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

/**
 * Moves the carousel to the left by updating the current index and calling the updateCarousel function.
 */
function clickLeft() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
}

/**
 * Moves the carousel to the right by updating the current index and calling the updateCarousel function.
 */
function clickRight() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
}

/**
 * Display the good image when clicking on a dot by calling the updateCarousel function. 
 *
 * @param {number} dotIndex - The index of the dot to click on.
 */
function clickDot(dotIndex) {
  currentIndex = dotIndex;
  updateCarousel(currentIndex);
}

/**
 * Fills the dots container with four dot elements and adds the "dot_selected" class to the first dot.
 */
function fillDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    
    if (i === 0) {
      dot.classList.add('dot_selected');
    }
  }
}

/**
 * Adds event listeners to the arrow buttons and dots.
 */
function addListeners() {
  // Add click event listener to the left arrow button
  arrowLeft.addEventListener('click', clickLeft);

  // Add click event listener to the right arrow button
  arrowRight.addEventListener('click', clickRight);

  // Add click event listener to each dot in the dots container
  // TODO comment each line
  dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', function() {
      clickDot(index);
    });
  });
}

// ******************** MAIN ********************

fillDots();
addListeners();
