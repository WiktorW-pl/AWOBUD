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


const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger-navigation');
const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    hamburgerNav.classList.toggle('hamburger-navigation--active');
}
hamburger.addEventListener('click', handleClick)


const navItem = document.querySelectorAll('.nav-list__item');
navItem.forEach((item, index) => item.addEventListener('click', ()=>{
    switch(index){
        case 0:
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            break;
        case 1:
            window.scrollTo({
                top: 900,
                behavior: "smooth"
            });
            break;
        case 2:
            window.scrollTo({
                top: 1464,
                behavior: "smooth"
            });
            break;
        case 3:
            window.scrollTo({
                top: 2860,
                behavior: "smooth"
            });
            break;
    }
}))

const hamburgerItem = document.querySelectorAll('.hamburger-list__item');
hamburgerItem.forEach((item, index) => item.addEventListener('click', ()=>{
    switch(index){
        case 0:
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            break;
        case 1:
            window.scrollTo({
                top: 900,
                behavior: "smooth"
            });
            break;
        case 2:
            window.scrollTo({
                top: 1514,
                behavior: "smooth"
            });
            break;
        case 3:
            window.scrollTo({
                top: 2660,
                behavior: "smooth"
            });
            break;
    }
}))


const seeMoreBtn = document.querySelector('.see-more-btn');
const seeMoreFn = () =>{
    window.scrollTo({
        top: 900,
        behavior: "smooth"
    });
}

const contactBtn = document.querySelector('.about-us__button');
const contactFn = () =>{
    window.scrollTo({
        top: 2860,
        behavior: "smooth"
    });
}
seeMoreBtn.addEventListener('click', seeMoreFn);
contactBtn.addEventListener('click', contactFn);