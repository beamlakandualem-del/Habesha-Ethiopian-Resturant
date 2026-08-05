/* ======================================
   HABESHA ETHIOPIAN RESTAURANT
====================================== */

// ============================
// Smooth Scrolling
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ============================
// Navbar Effect
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

// ============================
// Scroll Reveal
// ============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".9s";

observer.observe(section);

});/* ======================================
   BACK TO TOP BUTTON
====================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ======================================
   GALLERY IMAGE POPUP
====================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const popup = document.querySelector(".popup");

const popupImage = document.querySelector(".popup img");

const closePopup = document.querySelector(".popup span");

if (galleryImages.length && popup && popupImage && closePopup) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            popup.style.display = "flex";

            popupImage.src = image.src;

        });

    });

    closePopup.addEventListener("click", () => {

        popup.style.display = "none";

    });

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

}

/* ======================================
   AUTO HERO SLIDESHOW
====================================== */

const heroImages = [

    "images/hero1.jpg",

    "images/hero2.jpg",

    "images/hero3.jpg",

    "images/hero4.jpg"

];

let currentHero = 0;

setInterval(() => {

    currentHero++;

    if (currentHero >= heroImages.length) {

        currentHero = 0;

    }

    document.documentElement.style.setProperty(
        "--hero-image",
        `url('${heroImages[currentHero]}')`
    );

}, 5000);