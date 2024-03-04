// Function to hide the loading screen after 4 seconds
setTimeout(function () {
  var loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";

  // Start the website tour

  startTour();
}, 4000);

// Function to start the website tour
function startTour() {
  introJs()
    .oncomplete(function () {
      // Call the function to check for birthdays after the intro tour is completed
      checkBirthday();
    })
    .onexit(function () {
      // Call the function to check for birthdays when the intro tour is exited
      checkBirthday();
    })
    .start();
}

// Function to hide the loading screen after 4 seconds
setTimeout(function () {
  var loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";

  // Expand the navbar on mobile devices
  expandNavbar();

  // Start the website tour
  startTour();
}, 4000);

// Function to expand the navbar on mobile devices
function expandNavbar() {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  if (navbarToggler && navbarCollapse && window.innerWidth <= 768) {
    if (!navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  }
}

// Function to detect when user reaches the end of the website
// Function to detect when the user has reached the bottom of the page
// Function to detect when the user has reached the bottom of the page
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  // Check if the user has scrolled to the bottom of the page
  if (scrollPosition + windowHeight >= documentHeight - 100) {
    displayEndOfWebsiteModal();
  }
});

// Function to display the end of website modal
function displayEndOfWebsiteModal() {
  var endOfWebsiteModal = document.getElementById("endOfWebsiteModal");
  endOfWebsiteModal.style.display = "block";

  // Close the modal when the user clicks on the close button
  var closeModal = document.querySelector("#endOfWebsiteModal .close");
  closeModal.onclick = function () {
    endOfWebsiteModal.style.display = "none";
  };

  // Close the modal when the user clicks anywhere outside of it
  window.onclick = function (event) {
    if (event.target == endOfWebsiteModal) {
      endOfWebsiteModal.style.display = "none";
    }
  };
}

// Welcome note typing effect
const welcomeText1 = " Welcome to Mansi & Kapil's ";
const welcomeText2 = "Special Journey";
const typingTextElement = document.getElementById("typing-text");
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
    typingTextElement.innerHTML +=
      welcomeText2[index - welcomeText1.length - 1]; // Adjust index
  }

  index++;
  setTimeout(typeWelcomeText, 300); // Adjust typing speed as needed
}

typeWelcomeText();

// Function to trigger the confetti effect
function triggerConfetti() {
  var duration = 25 * 1000; // Duration of the confetti effect (in milliseconds)
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // Randomly generate confetti particles from two different origins
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

// Add event listener to trigger confetti effect when the window has finished loading
window.addEventListener("load", function () {
  // Trigger the confetti effect
  triggerConfetti();
});

// Function to check if it's Kapil's or Mansi's birthday and show a popup
function checkBirthday() {
  const currentDate = new Date();
  const kapilBirthday = new Date(currentDate.getFullYear(), 2, 7); // Kapil's birthday is on March 7
  const mansiBirthday = new Date(currentDate.getFullYear(), 10, 2); // Mansi's birthday is on November 2

  // Check if it's Kapil's birthday
  if (
    currentDate.getMonth() === kapilBirthday.getMonth() &&
    currentDate.getDate() === kapilBirthday.getDate()
  ) {
    displayPopup("Happy Birthday, Kapil!");
  }
  // Check if it's Mansi's birthday
  if (
    currentDate.getMonth() === mansiBirthday.getMonth() &&
    currentDate.getDate() === mansiBirthday.getDate()
  ) {
    displayPopup("Happy Birthday, Mansi!");
  }
}

// Function to display the popup
function displayPopup(message) {
  const modal = document.getElementById("customModal");
  const modalContent = document.getElementById("modalContent");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const thankYouBtn = document.getElementById("thankYouBtn");

  modal.style.display = "block";
  modalContent.innerHTML = message;

  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  thankYouBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// Call the function to check for birthdays

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
