// changing the header background color
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-bar');
    navbar.classList.toggle('nav-bar-colored', window.scrollY > 80);
});

// var header = document.getElementById('header');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         header.classList.add("header-colored");
//         header.classList.remove("header-transparent");
//     } 
//     else {
//         header.classList.add("header-transparent");
//         header.classList.remove("header-colored");
//     }
// };

// NAVIGATION BAR ANIMATION
let hamburgerIcon = document.querySelector(".hamburger-icon");
let navMenu = document.querySelector(".nav-menu");

hamburgerIcon.addEventListener("click", mobileMenu)

function mobileMenu() {
  hamburgerIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
}


const initAnimatedCounts = () => {
  const ease = (n) => {
    // https://github.com/component/ease/blob/master/index.js
    return --n * n * n + 1;
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Once this element is in view and starts animating, remove the observer,
        // because it should only animate once per page load.
        observer.unobserve(entry.target);
        const countToString = entry.target.getAttribute('data-countTo');
        const countTo = parseFloat(countToString);
        const duration = parseFloat(entry.target.getAttribute('data-animateCount'));
        const countToParts = countToString.split('.');
        const precision = countToParts.length === 2 ? countToParts[1].length : 0;
        const startTime = performance.now();
        const step = (currentTime) => {
          const progress = Math.min(ease((currentTime  - startTime) / duration), 1);
          entry.target.textContent = (progress * countTo).toFixed(precision);
          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(animationFrame);
          }
        };
        let animationFrame = window.requestAnimationFrame(step);
      }
    });
  });
  document.querySelectorAll('[data-animateCount]').forEach((target) => {
    target.setAttribute('data-countTo', target.textContent);
    target.textContent = '0';
    observer.observe(target);
  });
};
initAnimatedCounts();
  


// let count = 0;
// let counting = setInterval(rapidCount, 100);

// function rapidCount() {
//     let value = document.querySelector(".value");
//     value.innerHTML = ++count;
//     if (count === 36) {
//         clearInterval(counting);
//     }
// }


const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY =e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left =`${posX}px`;
    cursorOutline.style.top =`${posY}px`;

    // If you want to be dragging the cursorOutlilne (animation)

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });

});