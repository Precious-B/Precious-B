/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open menu");
    }

});


/* Close mobile menu when a link is clicked */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open menu");

    });

});


/* ================================
   TYPING EFFECT
================================ */

const typingText = document.getElementById("typing-text");

const roles = [
    "Software Application Developer",
    "IT Professional",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const typingSpeed = deleting ? 45 : 80;

    setTimeout(typeEffect, typingSpeed);
}


typeEffect();


/* ================================
   CURRENT YEAR
================================ */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ================================
   HEADER SHADOW ON SCROLL
================================ */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.25)";
    } else {
        header.style.boxShadow = "none";
    }

});
