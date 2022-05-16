const svg = document.querySelector('.services__svg');

function myFunction(x) {
    if (x.matches) { // If media query matches
        svg.src = "services-mobile.svg"
        svg.style.marginTop = 0 + "px";
    } else {
        svg.src = "services.svg"
        svg.style.marginTop = 60 + "px";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) 
  x.addListener(myFunction) 

const contactBtn = document.querySelector('#contactFormButton')

contactBtn.addEventListener("click", contactForm);

