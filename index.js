const gradient = "linear-gradient(to bottom, black, rgba(0,0,0,0))";


function increaseNumber(targetElement, endValue) {
    let currentNumber = 0;
    const duration = 2300;
    let step = 20;
    if (endValue === 23) {
        step = 1;
    }
    const interval = duration / (endValue / step);
    const timer = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= endValue) {
            clearInterval(timer);
            currentNumber = endValue;
        }
        targetElement.textContent = currentNumber;
        let content = targetElement.textContent;
        targetElement.textContent = content + "+";
    }, interval);


}
const lastStats = document.getElementById("lastStats");
const placement2021Element = document.getElementById('placement-2021');
const placement2022Element = document.getElementById('placement-2022');
const placement2023Element = document.getElementById('placement-2023');
const statisticsSection = document.getElementById('placement-stats');
const facultNumberElement = document.getElementById("facultyNumber");
const studentNumberElement = document.getElementById("studentsNumber");
const experienceNumberElement = document.getElementById("experienceNumber");

const observer_1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            increaseNumber(placement2021Element, 500);
            increaseNumber(placement2022Element, 900);
            increaseNumber(placement2023Element, 690);
            observer_1.unobserve(statisticsSection);
        }
    });
});

const observer_2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            increaseNumber(placement2021Element, 500);
            increaseNumber(placement2022Element, 900);
            increaseNumber(placement2023Element, 690);
            increaseNumber(facultNumberElement, 500);
            increaseNumber(studentNumberElement, 5000);
            increaseNumber(experienceNumberElement, 23);
            observer_2.unobserve(lastStats);
        }
    });
});

observer_1.observe(statisticsSection);
observer_2.observe(lastStats);


document.addEventListener('DOMContentLoaded', function () {
    const navdiv = document.querySelector('.fixed-top');
    const navbar = document.querySelector('.navbar');
    const navbar2 = document.querySelector('.navbar-expand-lg');
    const navbar2ndLarge = document.querySelector('#second-large-navbar');
    const nav2text = document.getElementById("nav-bar2-text");
    const nav2text2 = document.getElementById("nav-bar2-text2");
    const nav2text3= document.getElementById("nav-bar2-text3");
    const nav2text4 = document.getElementById("nav-bar2-text4");
    const nav2text5= document.getElementById("nav-bar2-text5");
    const nav2text6= document.getElementById("nav-bar2-text6");
    const nav2text7= document.getElementById("nav-bar2-text7");
    console.log(nav2text7);
    const showDiv = document.querySelector('.nav-color');
    navbar.style.backgroundColor ='transparent';
    navbar2.style.backgroundColor = "transparent";
    navbar2ndLarge.style.backgroundColor="transparent";
    navdiv.style.backgroundImage=gradient;
    let hasVisitedShowDiv = false;


    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateNavbarBackground() {
        if (!hasVisitedShowDiv && isInViewport(showDiv)) {
            const navelement=document.getElementById('second-large-navbar');
            navbar.style.backgroundColor = '#b1040e'; 
            navbar2ndLarge.style.backgroundColor='white';
            nav2text.classList.remove("hover-underline-animation");
            nav2text.classList.add("hover-underline-animation-1");
            nav2text.style.color="black";
            nav2text2.classList.remove("hover-underline-animation");
            nav2text2.classList.add("hover-underline-animation-1");
            nav2text2.style.color="black";
            nav2text3.classList.remove("hover-underline-animation");
            nav2text3.classList.add("hover-underline-animation-1");
            nav2text3.style.color="black";
            nav2text4.classList.remove("hover-underline-animation");
            nav2text4.classList.add("hover-underline-animation-1");
            nav2text4.style.color="black";
            nav2text5.classList.remove("hover-underline-animation");
            nav2text5.classList.add("hover-underline-animation-1");
            nav2text5.style.color="black";
            nav2text6.classList.remove("hover-underline-animation");
            nav2text6.classList.add("hover-underline-animation-1");
            nav2text6.style.color="black";
            nav2text7.classList.remove("hover-underline-animation","navbar2-dropdown");
            nav2text7.classList.add("hover-underline-animation-1","navbar2-dropdown-chnage");
            nav2text7.style.color="black";
            navelement.classList.add("shadow-lg");
            hasVisitedShowDiv = false; 
        }
    }

    updateNavbarBackground();
    window.addEventListener('scroll', updateNavbarBackground);
});

//Small Navbar js
let button = document.getElementById("button");
let flag = 0;
let icon = document.getElementById("changeItem");
let menu = document.getElementById("menuItems");
button.addEventListener("click", function() {
    if (flag === 0) {
        icon.classList.remove("fa-solid", "fa-bars");
        icon.classList.add("fa-solid", "fa-xmark");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 1;
    } else {
        icon.classList.remove("fa-solid", "fa-xmark");
        icon.classList.add("fa-solid", "fa-bars");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 0;
    }
});

//Small Navbar js ends

//code for top button

let mybutton = document.getElementById("myBtn");
console.log(mybutton);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("d-block");
    mybutton.classList.remove("d-none");
    
  } else {
    mybutton.classList.add("d-none");
    mybutton.classList.remove("d-block");

    const navbar = document.querySelector('.navbar');
    const navbar2 = document.querySelector('.navbar-expand-lg');
    const navbar2ndLarge = document.querySelector('#second-large-navbar');
    const nav2text = document.getElementById("nav-bar2-text");
    const nav2text2 = document.getElementById("nav-bar2-text2");
    const nav2text3= document.getElementById("nav-bar2-text3");
    const nav2text4 = document.getElementById("nav-bar2-text4");
    const nav2text5= document.getElementById("nav-bar2-text5");
    const nav2text6= document.getElementById("nav-bar2-text6");
    const nav2text7= document.getElementById("nav-bar2-text7");
    const nav2text8= document.getElementById("nav-bar2-text8");
    const showDiv = document.querySelector('.nav-color');
    const navelement=document.getElementById('second-large-navbar');
    navbar.style.backgroundColor = "transparent";
    navbar2.style.backgroundColor = "transparent";
    navbar2ndLarge.style.backgroundColor="transparent";
    nav2text.classList.remove("hover-underline-animation-1");
    nav2text.classList.add("hover-underline-animation");
    nav2text.style.color="white";
    nav2text2.classList.remove("hover-underline-animation-1");
    nav2text2.classList.add("hover-underline-animation");
    nav2text2.style.color="white";
    nav2text3.classList.remove("hover-underline-animation-1");
    nav2text3.classList.add("hover-underline-animation");
    nav2text3.style.color="white";
    nav2text4.classList.remove("hover-underline-animation-1");
    nav2text4.classList.add("hover-underline-animation");
    nav2text4.style.color="white";
    nav2text5.classList.remove("hover-underline-animation-1");
    nav2text5.classList.add("hover-underline-animation");
    nav2text5.style.color="white";
    nav2text6.classList.remove("hover-underline-animation-1");
    nav2text6.classList.add("hover-underline-animation");
    nav2text6.style.color="white";
    nav2text7.classList.remove("hover-underline-animation-1","navbar2-dropdown-change");
    nav2text7.classList.add("hover-underline-animation","navbar2-dropdown");
    nav2text7.style.color="white";
    navelement.classList.remove("shadow-lg");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


