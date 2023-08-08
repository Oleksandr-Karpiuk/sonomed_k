let lastScroll = 0;
const defaultOffset = 850;
const header = document.querySelector(".logo");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("scale");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("scale");
  } else if (scrollPosition() < defaultOffset) {
    header.classList.remove("scale");
  }

  lastScroll = scrollPosition();
});

// Приховування хедера

// let lastScroll = 0;
// const defaultOffset = 400;
// const header = document.querySelector(".header");

// const scrollPosition = () =>
//   window.pageYOffset || document.documentElement.scrollTop;
// const containHide = () => header.classList.contains("hide");

// window.addEventListener("scroll", () => {
//   if (
//     scrollPosition() > lastScroll &&
//     !containHide() &&
//     scrollPosition() > defaultOffset
//   ) {
//     header.classList.add("hide");
//   } else if (scrollPosition() < lastScroll && containHide()) {
//     header.classList.remove("hide");
//   }

//   lastScroll = scrollPosition();
// });
