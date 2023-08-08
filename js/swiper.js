var swiper = new Swiper(".mySwiperServices", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
