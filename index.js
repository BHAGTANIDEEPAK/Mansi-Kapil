// Function to hide the loading screen after 4 seconds
setTimeout(function() {
  var loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'none';
}, 4000);

// Welcome note typing effect
const welcomeText1 = " Welcome to Mansi & Kapil's ";
const welcomeText2 = "Special Journey";
const typingTextElement = document.getElementById('typing-text');
let index = 0;

function typeWelcomeText() {
  if (index < welcomeText1.length) {
    typingTextElement.innerHTML += welcomeText1[index];
  } else if (index === welcomeText1.length) {
    typingTextElement.innerHTML += "<br>"; // Add line break after Kapil's
  } else if (index >= welcomeText1.length + welcomeText2.length + 1) {
    index = 0; // Reset index to make the effect infinite
    typingTextElement.innerHTML = ""; // Clear existing text
  } else {
    typingTextElement.innerHTML += welcomeText2[index - welcomeText1.length - 1]; // Adjust index
  }

  index++;
  setTimeout(typeWelcomeText, 300); // Adjust typing speed as needed
}

typeWelcomeText();

// Function to trigger the confetti effect
function triggerConfetti() {
  var duration = 10 * 1000; // Duration of the confetti effect (in milliseconds)
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // Randomly generate confetti particles from two different origins
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    );
  }, 250);
}

// Add event listener to trigger confetti effect when the window has finished loading
window.addEventListener('load', function() {
  // Trigger the confetti effect
  triggerConfetti();
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Auto slide functionality
const interval = setInterval(function () {
  plusSlides(1);
}, 3000); // Change 3000 to adjust the interval (in milliseconds)
