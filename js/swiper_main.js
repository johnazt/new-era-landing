
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 70,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  parallax:true,
  breakpoints: {
         700:{
          slidesPerView: 4
        },
        900: {
          slidesPerView: 6,
        },
      },
});
