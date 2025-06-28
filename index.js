const openbtn = document.querySelector(".nav-toggle");
const closebtn = document.querySelector(".clsbtn");
const sidebar = document.querySelector(".ph-view");
const body = document.querySelector("body");

function opensidebar() {
  sidebar.classList.add("active");
  body.classList.add("menu-open");
  openbtn.classList.add("none");
}
function closesidebar() {
  sidebar.classList.remove("active");
  body.classList.remove("menu-open");
  openbtn.classList.remove("none");
}

openbtn.addEventListener("click", opensidebar);
closebtn.addEventListener("click", closesidebar);

// splide initialize
var splide = new Splide(".splide", {
  perPage: 4,
  perMove: 1,
  gap: "2rem",
  type: "loop",
  breakpoints: {
    768: {
      perPage: 3,
    },
    576: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
});

splide.mount();


var splide = new Splide( '.splide1', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
} );

splide.mount();

