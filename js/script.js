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
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle
"use strict";
(function () {
   let originalPositions = [];
   let daElements = document.querySelectorAll('[data-da]');
   let daElementsArray = [];
   let daMatchMedia = [];
   if (daElements.length > 0) {
      let number = 0;
      for (let index = 0; index < daElements.length; index++) {
         const daElement = daElements[index];
         const daMove = daElement.getAttribute('data-da');
         if (daMove != '') {
            const daArray = daMove.split(',');
            const daPlace = daArray[1] ? daArray[1].trim() : 'last';
            const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
            const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
            const daDestination = document.querySelector('.' + daArray[0].trim())
            if (daArray.length > 0 && daDestination) {
               daElement.setAttribute('data-da-index', number);
               originalPositions[number] = {
                  "parent": daElement.parentNode,
                  "index": indexInParent(daElement)
               };
               daElementsArray[number] = {
                  "element": daElement,
                  "destination": document.querySelector('.' + daArray[0].trim()),
                  "place": daPlace,
                  "breakpoint": daBreakpoint,
                  "type": daType
               }
               number++;
            }
         }
      }
      dynamicAdaptSort(daElementsArray);

      for (let index = 0; index < daElementsArray.length; index++) {
         const el = daElementsArray[index];
         const daBreakpoint = el.breakpoint;
         const daType = el.type;

         daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
         daMatchMedia[index].addListener(dynamicAdapt);
      }
   }
   function dynamicAdapt(e) {
      for (let index = 0; index < daElementsArray.length; index++) {
         const el = daElementsArray[index];
         const daElement = el.element;
         const daDestination = el.destination;
         const daPlace = el.place;
         const daBreakpoint = el.breakpoint;
         const daClassname = "_dynamic_adapt_" + daBreakpoint;

         if (daMatchMedia[index].matches) {
            if (!daElement.classList.contains(daClassname)) {
               let actualIndex = indexOfElements(daDestination)[daPlace];
               if (daPlace === 'first') {
                  actualIndex = indexOfElements(daDestination)[0];
               } else if (daPlace === 'last') {
                  actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
               }
               daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
               daElement.classList.add(daClassname);
            }
         } else {
            if (daElement.classList.contains(daClassname)) {
               dynamicAdaptBack(daElement);
               daElement.classList.remove(daClassname);
            }
         }
      }
      customAdapt();
   }

   dynamicAdapt();

   function dynamicAdaptBack(el) {
      const daIndex = el.getAttribute('data-da-index');
      const originalPlace = originalPositions[daIndex];
      const parentPlace = originalPlace['parent'];
      const indexPlace = originalPlace['index'];
      const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
      parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
   }
   function indexInParent(el) {
      var children = Array.prototype.slice.call(el.parentNode.children);
      return children.indexOf(el);
   }
   function indexOfElements(parent, back) {
      const children = parent.children;
      const childrenArray = [];
      for (let i = 0; i < children.length; i++) {
         const childrenElement = children[i];
         if (back) {
            childrenArray.push(i);
         } else {
            if (childrenElement.getAttribute('data-da') == null) {
               childrenArray.push(i);
            }
         }
      }
      return childrenArray;
   }
   function dynamicAdaptSort(arr) {
      arr.sort(function (a, b) {
         if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
      });
      arr.sort(function (a, b) {
         if (a.place > b.place) { return 1 } else { return -1 }
      });
   }
   function customAdapt() {
      //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
   }
}());;
let burger = document.querySelector('.burger'),
    bodyLock = document.querySelector('body'),
    menuBody = document.querySelector('.nav'),
    navLink = document.querySelectorAll('.nav__link'),
    headerLabel = document.querySelector('.header__label');

burger.addEventListener('click', function () {
    burger.classList.toggle('_active');
    bodyLock.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
});

function removeActive() {
    burger.classList.remove('_active');
    bodyLock.classList.remove('_lock');
    menuBody.classList.remove('_active');
}

headerLabel.addEventListener('click', removeActive);

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        removeActive();
    });
}







;
if (document.querySelector('.mainslider')) {
    let mainslider = new Swiper('.mainslider__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        speed: 800,
        //loop: true,
        /*   pagination: {
             el: '.mainslider__dotts',
             clickable: true,
         }, */
        //Arrows
        navigation: {
            nextEl: '._arrow_next',
            prevEl: '._arrow_prev',
        },
    });
}

$('.reviews-clients__body').slick({
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true
});

;

(function ($) {
   $(window).on("load", function () {
      $(".nav__link,.btn-about__btn,.btn-intro__link,.header__label").mPageScroll2id({
         scrollSpeed: 600,
         offset: 20,
         scrollEasing: "swing",
         autoScrollSpeed: true
      });
   });
})(jQuery);

let portfolio_btn = document.querySelectorAll('.portfolio__btn');
let images_column = document.querySelectorAll('.images-portfolio');
// let portfolio_asolute = document.querySelector('.portfolio__absolute');

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





