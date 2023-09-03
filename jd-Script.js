// // import Swiper JS
// import Swiper from "swiper";
// // import Swiper styles
// import "swiper/css";

// //  const swiper = new Swiper(...);

// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from "swiper";
// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// //  // init Swiper:
// //  const swiper = new Swiper('.swiper', {
// //    // configure Swiper to use modules
// //    modules: [Navigation, Pagination],
// //    ...
// //  });

/*
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

*/

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ===================================================================================

let header_var = document.getElementById("header-id");
let section = document.getElementById("about-page");
let landingPage = document.getElementById("landing-page");

let options = {
  // root: null,
  // threshold: 0.25,
  // threshold: 0.8,
  // rootMargin: "0px",
  // rootMargin: "-200px",
};

let options1 = {};

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header_var.classList.add("inverse");
    } else {
      header_var.classList.remove("inverse");
    }
  });
}, options);
observer.observe(landingPage);

let observer1 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header_var.classList.remove("inverse");
    } else {
      // header_var.classList.add("inverse");
    }
  });
}, options);
observer1.observe(section);

// sections.forEach((section) => {
//   observer.observe(section);
// });

//        ================================================================================

const aboutSection = document.getElementById("about-heading-div");
const allChild = aboutSection.children;
const newAllChild = Array.from(allChild);

const noOfChild = aboutSection.children.length;

const scrollOptions = {
  threshold: 1,
};
let onScrollObserver = new IntersectionObserver(function (
  entries,
  onScrollObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      triggerOnScroll(newAllChild);
      onScrollObserver.unobserve(entry.target);
    }
  });
},
scrollOptions);

onScrollObserver.observe(aboutSection);

function triggerOnScroll(list) {
  list.forEach((child, index) => {
    setTimeout(() => {
      child.classList.add("appear");
    }, 800 * index);
  });
}

//        ================================================================================

const sliders = document.querySelectorAll(".slide-in");

const slideOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};
let onSlideObserver = new IntersectionObserver(function (
  entries,
  onSlideObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      onScrollObserver.unobserve(entry.target);
    }
  });
},
slideOptions);

sliders.forEach((slide) => {
  onSlideObserver.observe(slide);
});
