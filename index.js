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



