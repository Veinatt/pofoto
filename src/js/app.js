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
  if (y > 50) {
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
  if (y > 50) {
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
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1.05,
      spaceBetween: 16,
    },
  }
});
const swiper_addon = new Swiper('.swiper-addon', {
  spaceBetween: 20,
  breakpoints: {
    1400: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    370: {
      slidesPerView: 2.1,
      spaceBetween: 16,
    },
    300: {
      slidesPerView: 1.05,
      spaceBetween: 16,
    },
  }
});
const swiper_price = new Swiper('.swiper-price', {
  spaceBetween: 20,
  breakpoints: {
    1400: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    370: {
      slidesPerView: 2.1,
      spaceBetween: 16,
    },
    300: {
      slidesPerView: 1.05,
      spaceBetween: 16,
    },
  }
});
const swiper_sec_6 = new Swiper('.swiper-sec-6', {
  slidesPerView: 1.05,
  spaceBetween: 16,
});
// $('#priceModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var title = button.data('title') // Extract info from data-* attributes
//   var desc = button.data('desc') // Extract info from data-* attributes
//   var img = button.data('img') // Extract info from data-* attributes// Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   console.log(title);
  
//   var modal = $(this)
//   modal.find('img').attr('src', img);
//   modal.find('.title span').text(title);
//   modal.find('.desc').text(desc);
//   modal.find('.main-btn').attr('data-price', title);
//   console.log(title + 'after');
// })



// $('#defaultModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var price = button.data('price') // Extract info from data-* attributes
//   console.log(price);
// // Extract info from data-* attributes// Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('h2 span').text(price);
//   console.log(price + 'after');
// })