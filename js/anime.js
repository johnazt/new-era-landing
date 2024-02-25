// anime({
//   targets: '.levels__item',
//   // translateY: 150,
//   // backgroundColor: '#FFF',
//   duration: 1000
// });

// Animation
const animation = anime({
  targets: '.levels__item',
  translateX: '-300%',
  direction: 'normal',
  easing: 'easeInOutSine'
});

const triggerElementOne = document.querySelector(".levels__title");
const triggerElementTwo = document.querySelector(".features__grid");

const animateOnScroll = function (div, speed = 500, offset = 0) {
  const scrollPercent = window.pageYOffset - div.offsetTop;
  return (scrollPercent + offset) / speed;
};

// Scroll listener
window.onscroll = function () {
  animation.seek(animateOnScroll(triggerElementOne, 1000,400) * animation.duration);
  animationTwo.seek(animateOnScroll(triggerElementTwo, 1000,400) * animation.duration);
};


const animationTwo = anime({
  targets: '.features__grid',
  translateX: '-300%',
  direction: 'normal',
  easing: 'easeInOutSine'
});
