// ============================
// BUTTON PRESS EFFECT
// ============================

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn, .price-btn, .nav-btn"
);

buttons.forEach(button => {

  button.addEventListener("click", function () {

    this.style.transform = "scale(0.96)";

    setTimeout(() => {
      this.style.transform = "";
    }, 150);

  });

});


// ============================
// SCROLL REVEAL
// ============================

const revealElements = document.querySelectorAll(
  ".program-card, .price-card, .image-placeholder, .about-content"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach(element => {

  element.classList.add("reveal");

  observer.observe(element);

});


// ============================
// CONTACT FORM
// ============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
      "Thank you! Your enquiry has been received."
    );

    contactForm.reset();

  });

}


// ============================
// NAVBAR SHADOW ON SCROLL
// ============================

window.addEventListener("scroll", function() {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 10px 40px rgba(0,0,0,0.5)";

  } else {

    navbar.style.boxShadow = "none";

  }

});
  
  

  
