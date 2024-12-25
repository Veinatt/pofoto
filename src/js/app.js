document.addEventListener('DOMContentLoaded', function () {
  testWebP(document.body)
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add('webp') : elem.classList.add('no-webp')
  }
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


// AOS.init({
//   duration: 1000,
// });


ready(function () {
  let y = document.documentElement.scrollTop;
  if (y > 100) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
  // const TimeoutModal = new bootstrap.Modal('#TimeoutForm', {
  // })
  // setTimeout(() => {
  //   TimeoutModal.show()
  // }, 300);

});

window.addEventListener('scroll', function () {
  let y = document.documentElement.scrollTop;
  if (y > 100) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
})

var doc = document.documentElement;
var w = window;

/*
define four variables: curScroll, prevScroll, curDirection, prevDirection
*/

var curScroll;
var prevScroll = w.scrollY || doc.scrollTop;
var curDirection = 0;
var prevDirection = 0;

/*
how it works:
-------------
create a scroll event listener
create function to check scroll position on each scroll event,
compare curScroll and prevScroll values to find the scroll direction
scroll up - 1, scroll down - 2, initial - 0
then set the direction value to curDirection
compare curDirection and prevDirection
if it is different, call a function to show or hide the header
example:
step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
*/

var header = document.querySelector('header');
var toggled;
var threshold = 100;

var checkScroll = function () {
  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    // scrolled down
    curDirection = 2;
  } else {
    //scrolled up
    curDirection = 1;
  }

  if (curDirection !== prevDirection) {
    toggled = toggleHeader();
  }

  prevScroll = curScroll;
  if (toggled) {
    prevDirection = curDirection;
  }
};

var toggleHeader = function () {
  toggled = true;
  if (curDirection === 2 && curScroll > threshold) {
    header.classList.add('hide');
  } else if (curDirection === 1) {
    header.classList.remove('hide');
  } else {
    toggled = false;
  }
  return toggled;
};

window.addEventListener('scroll', checkScroll);

const swiper_review = new Swiper('.swiper-review', {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});
const swiper_addon = new Swiper('.swiper-addon', {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});
const swiper_price = new Swiper('.swiper-price', {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});
