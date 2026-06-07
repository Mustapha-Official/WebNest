function toggleMenu() {
  const button = document.querySelector(".nav-links");
  button.classList.toggle("active");
}

//PRICES BUTTON ALERT
function priceBtn() {
  alert("Hey there! This action is taking you directly on WhatsApp to connect with mustapha for more info.");
}

// PORTFOLIO BUTTONS
function bio() {
  alert("You're opening Mustapha's biography, his life, challenges, inspirations and journey on an external website.");
}

function fatima() {
  alert("This website offers different types of elegant, modern , & fashionable dresses for both male and female, ready to go and see?");
}

function auto() {
  alert("This action is taking you to a beautiful website of mustapha's autobiography, similar to his biography website.");
}

// FORM ERASE AFTER SUBMIT 
document.getElementById("contactForm").addEventListener("submit", function() {
  // Wait a tiny moment, then clear
  setTimeout(() => {
    this.reset();
  }, 100);
});
