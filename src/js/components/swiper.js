const ourWorksSwiper = new Swiper(".our-works__slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 100,

  navigation: {
    nextEl: ".our-works__button-next",
    prevEl: ".our-works__button-prev",
  },
});

const whyWeSwiper = new Swiper(".why-we__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 100,

  navigation: {
    nextEl: ".why-we__button-next",
    prevEl: ".why-we__button-prev",
  },
});
const ourWorkersSwiper = new Swiper(".our-workers__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});
const reviewsSwiper = new Swiper(".reviews__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 100,

  navigation: {
    nextEl: ".reviews__button-next",
    prevEl: ".reviews__button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});
