"use strict";

//======================== Slider ====================

const mainslider = new Swiper('.mainslider__body', {
   observer: true,
   observeParents: true,
   slidesPerView: 1,
   spaceBetween: 10,
   autoHeight: true,
   speed: 800,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   navigation: {
      nextEl: '._arrow_next',
      prevEl: '._arrow_prev',
   },
});
const reviewsSlider = new Swiper('.reviews-clients__slider', {
   centeredSlides: true,
   autoHeight: true,
   slidesPerView: 1,
   spaceBetween: 30,
   speed: 800,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   pagination: {
      el: '.reviews-clients__pagination',
      clickable: true,
   },
});
const slientsBrandsSlider = new Swiper('.clients__brands', {
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1.5,
      },
      // when window width is >= 400px
      400: {
         slidesPerView: 2.3,
      },
      // when window width is >= 550px
      550: {
         slidesPerView: 3.3,
      },
      // // when window width is >= 750px
      750: {
         slidesPerView: 4.3,
      },
      // when window width is >= 900px
      900: {
         slidesPerView: 5,
         watchOverflow: true
      }
   }
});



;

//========================== Burger ============================

const burger = document.querySelector('.burger'),
   bodyLock = document.querySelector('body'),
   menuBody = document.querySelector('.nav'),
   navLink = document.querySelectorAll('.nav__link'),
   headerLabel = document.querySelector('.header__label'),
   socialLinks = document.querySelectorAll('.social-header__item');


function burgerActiveNoActive() {
   if (!burger.classList.contains('_active')) {
      burger.classList.add('_not-active');
   } else {
      burger.classList.remove('_not-active');
   }
}

burger.addEventListener('click', function () {
   burger.classList.toggle('_active');
   bodyLock.classList.toggle('_lock');
   menuBody.classList.toggle('_active');
   burgerActiveNoActive();
});

function removeActive() {
   burger.classList.remove('_active');
   bodyLock.classList.remove('_lock');
   menuBody.classList.remove('_active');
   burgerActiveNoActive();
}

headerLabel.addEventListener('click', removeActive);

for (let i = 0; i < navLink.length; i++) {
   navLink[i].addEventListener('click', removeActive);
}
for (let i = 0; i < socialLinks.length; i++) {
   socialLinks[i].addEventListener('click', removeActive);
}







;

//======================== Webp ========================

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

//====================== Image view gallery ==========================

lightGallery(document.getElementById('all'), {
   selector: '.images-portfolio__img',
});
lightGallery(document.getElementById('website'), {
   selector: '.images-portfolio__img',
});
lightGallery(document.getElementById('brochures'), {
   selector: '.images-portfolio__img',
});
lightGallery(document.getElementById('logos'), {
   selector: '.images-portfolio__img',
});


//======================== Nav active scroll ============================

const sections = document.querySelectorAll('.section');
const navLinksHeader = document.querySelectorAll('.nav__link');

let sectionOptions = {
   root: null,
   rootMargin: '0px',
   threshold: 0.3
}
let observerSection = new IntersectionObserver(entries => {
   entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const section = entry.target;
      navLinksHeader.forEach(navLinkHeader => {
         const navLinkHeaderHref = navLinkHeader.getAttribute('href').slice(1);
         if (section.id == navLinkHeaderHref) {
            navLinkHeader.classList.add('active');
         } else {
            navLinkHeader.classList.remove('active');
            navLinkHeader.blur();
         }
      });
   });
}, sectionOptions);

sections.forEach((section) => {
   observerSection.observe(section);
});


//======================== Smooth scroll =========================

const scrollLinks = document.querySelectorAll('.scroll');

function smoothScroll(event) {
   event.preventDefault();
   const targetId = event.currentTarget.getAttribute('href');
   window.scrollTo({
      top: document.querySelector(targetId).offsetTop,
      behavior: "smooth"
   });
}

scrollLinks.forEach(link => {
   link.addEventListener('click', smoothScroll);
});

//========================== Tabs ============================

let portfolio_btn = document.querySelectorAll('.portfolio__btn');
let images_column = document.querySelectorAll('.images-portfolio');

for (let i = 0; i < portfolio_btn.length; i++) {
   portfolio_btn[i].addEventListener('click', function () {
      portfolio_btn.forEach(button => {
         button.classList.remove('active');
      });
      images_column.forEach(button => {
         button.classList.remove('active');
      });
      portfolio_btn[i].classList.add('active');
      images_column[i].classList.add('active');
   });
}

//========================= Textarea =========================

const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function () {
   if (this.scrollTop > 0) {
      this.style.height = this.scrollHeight + 5 + "px";
   }
});





