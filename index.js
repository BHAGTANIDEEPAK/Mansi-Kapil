      // Wait for all images to be loaded
      window.addEventListener('load', function() {
        // Hide the loading screen
        document.getElementById('loadingScreen').style.display = 'none';
        // Show the content
        document.querySelector('.container').style.display = 'block';
      },5000);

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

const welcomeText = "Welcome to Mansi & Kapil's Special Journey Website!";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < welcomeText.length) {
    typingElement.innerHTML += welcomeText.charAt(index);
    index++;
    setTimeout(typeWriter, 300); // Adjust typing speed here (milliseconds)
  } else {
    // Text typed completely, reset index to create the typing effect again
    index = 0;
    typingElement.innerHTML = "";
    setTimeout(typeWriter, 0); // Wait for 1 second before starting again
  }
}

// Start the typing effect when the page loads
window.onload = typeWriter;

