// select nav trigger btn
const navTrigger = document.querySelector("#navTrigger");

// select navigation
const nav = document.querySelector("#nav");

//select the nav button
const navCloseBtn = document.querySelector("#navCloseBtn");

// select header
const header = document.querySelector("#header");

// add a click listener to the nav trigger btn
navTrigger.addEventListener("click", () => {
  // toggle the "is-open" class on the navigation element open/close
  nav.classList.toggle("is-open");
});

//add a click event listener to the nav close btn
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("is-open");
});

// add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // get the current vertical scroll position
  const scrollY = window.scrollY;
  console.log(scrollY);

  // add or remove the active class from the header bases on the scroll position
  scrollY > 50 ? header.classList.add("is-active") : header.classList.remove("is-active");
});

//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
