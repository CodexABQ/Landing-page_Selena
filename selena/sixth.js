
document.addEventListener("DOMContentLoaded", function() {
  document.body.style.overflow = "hidden"
  const preloader = document.querySelector('.preloader')
  setTimeout(() => {
    preloader.style.display = "none"
    document.body.style.overflowY = "visible"
  }, 2000);
})
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.add('active');
});

document.querySelector('.cancel-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('active');
});
let change_nav_function = "false";
let home_button = document.querySelector("header #home") 
let about_button = document.querySelector("header #about")
let contact_button = document.querySelector("header #contact")
let sales_button = document.querySelector("header #sales")
let gallery_toggle = document.querySelector("header #gallery")
let cancel_toggle = document.querySelector("header .cancel-toggle p")
function change_nav(){
    if(window.innerWidth <= 220){
        home_button.innerHTML = '<img src="./img/home-icon-silhouette-svgrepo-com.svg" alt="">'
        about_button.innerHTML = '<img src="./img/about-us-svgrepo-com.svg" alt="">'
        contact_button.innerHTML = '<img src="./img/contact-book-svgrepo-com.svg" alt="">'
        sales_button.innerHTML = '<img src="./img/sales-up-graph-svgrepo-com.svg" alt="">'
        cancel_toggle.innerHTML = '<img src="./img/cancel2-svgrepo-com.svg" alt="">'
        gallery_toggle.innerHTML = '<img src="./img/gallery-svgrepo-com.svg" alt="">';
    }else{
        home_button.innerHTML = "Home"
        about_button.innerHTML = "Music"
        contact_button.innerHTML = "Movies"
        sales_button.innerHTML = "Event"
        cancel_toggle.innerHTML = "Cancel"
        gallery_toggle.innerHTML = "Gallery"
    }
}
change_nav()
window.addEventListener("resize", ()=>{
    change_nav();
})
const slider = document.querySelector('.body-3 .slider');
const prevButton = document.querySelector('.body-3 .prev-button');
const nextButton = document.querySelector('.body-3 .next-button');

let slideIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
  slider.style.transform = `translateX(-${slideIndex * 40}vw)`; // Adjust based on slide width
}

function autoScroll() {
  setInterval(() => {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    showSlides();
  }, 3000); // Adjust auto-scroll speed (milliseconds)
}

prevButton.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
    showSlides();
  }
});

nextButton.addEventListener('click', () => {
  if (slideIndex < totalSlides - 5 /* Number of visible slides */) {
    slideIndex++;
    showSlides();
  }
});

autoScroll();