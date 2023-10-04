// Function for smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Function for slide-in effect on Header 1 and Navigation
  setTimeout(function() {
    var mainContent = document.querySelector('.main-content');
    mainContent.classList.add('show');  
    var fadeElement = document.querySelector('.nav');
    fadeElement.classList.add('show');
  }, 2000);
  
//Function for slide in for About Title header
setTimeout(function() {
    var mainContent = document.querySelector('.main-content');
    mainContent.classList.add('show');

    var titleElement = document.querySelector('.about_title');
    titleElement.classList.add('show');
  }, 300);


  // Function for slide-up effect on About Me page
document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.querySelector('.image-container img');
  
    // Add an event listener to trigger the slide-up effect for About Me link in the nav menu
    document.querySelector('.nav a#about-link').addEventListener('click', function(event) {
      event.preventDefault();
  
      // Scroll to the About Me section
      document.querySelector('#about-page').scrollIntoView({
        behavior: 'smooth'
      });
  
      // Remove the active class from all nav links
      document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
      });
  
      // Add the active class to the clicked About Me link
      this.classList.add('active');
  
      // Add a delay to allow the smooth scroll to complete before triggering the slide-up animation
      setTimeout(function() {
        // Add the show class to the image container to trigger the slide-up animation
        imageContainer.classList.add('show');
  
        // Remove the show class after the animation completes
        setTimeout(function() {
          imageContainer.classList.remove('show');
        }, 1000);
      }, 500);
    });
  });

// Function for Illustration page scroll Parallax

document.addEventListener('DOMContentLoaded', function(){
  //let values
  let text = document.getElementById('text');
  let rightbird = document.getElementById('rightbird');
  let leftbird = document.getElementById('leftbird');
  let background = document.getElementById('background');
  let rocks = document.getElementById('rocks');
  let field = document.getElementById('field');

  //let values for Illustration 2
  let drawing2 = document.getElementById('drawing2');
  let third2 = document.getElementById('third2');
  let fourth2 = document.getElementById('fourth2');
  let fifth2 = document.getElementById('fifth2');

  //let values for Illustration 3
  let second3 = document.getElementById('second3');
  let third3 = document.getElementById('third3');
  let sparkles = document.getElementById('sparkles');
  let stars = document.getElementById('stars');
  let blues = document.getElementById('blues');

  //let values for Illustration 4
  

  //scroll functions
  window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    rightbird.style.top = value * -1.5 + 'px';
    rightbird.style.left = value * 2 + 'px';
    leftbird.style.top = value * -1.5 + 'px';
    leftbird.style.left = value * -5 + 'px';
    rocks.style.top = value * -0.12 + 'px'; 
    field.style.top = value * -0.12 + 'px';

    //scroll function for Illustration 2
   
    third2.style.bottom = value * -0.01 + 'px';
    fourth2.style.bottom = value * -0.02 + 'px';
    fifth2.style.bottom = value * -0.02 + 'px';
    
    //scroll function for Illustration 3

    second3.style.top = value * -1.5 + 'px';
    third3.style.top = value * -0.4 + 'px';
    sparkles.style.top =value * -0.5 + 'px';
    stars.style.top = value * -0.25 + 'px';
    blues.style.top = value * -0.09 + 'px';

  })

  
});

// Carousel Function

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentdot, targetDot) => {
  currentdot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if(targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

// Clicking left, moves slide to the left

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
// Clicking right, moves slide to the right

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// Clicking new nav indicators, moves to that slide

dotsNav.addEventListener('click', e => {
  // Find indicator that was clicked on
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);

})




  