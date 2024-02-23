// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

// copy menu for mobile 
// =================================    
function copyMenu(){
    // copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML= dptCategory.innerHTML;
    
    // copy inside nav to nav 
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

// show menu on mobile //
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addClass = document.querySelector('.site');

menuButton.addEventListener('click', function () {
    addClass.classList.toggle('showmenu');
})

closeButton.addEventListener('click', function () {
    addClass.classList.remove('showmenu');    
})



// show sub menu on mobile //

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu)=> menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}


//Slider//
//Also to initialize swiper library//
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
});

//Second slider//
let items = document.querySelectorAll('.second-slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }

//Show search menu//
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})


//show dpt menu//
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
})































// Smooth scrolling using jQuery easing
// ====================================    
// $('.js--scroll-to-plans').on('click', function(e) {
//    e.preventDefault();
//    var target = $(this).attr('href');
//    $('html, body').animate({
//       scrollTop: $(target).offset().top
//    }, 1000, 'easeForce');
// });

// $('.js--scroll-to-start').on('click', function(){
//    $('html, body').stop().animate({
//       'scrollTop': 0
//    }, 500);
// });

// Navigation bar color change on scroll
// ===================================    
// var navbarColorChange = function (){
//    if ($(window).width() > 768 ) {
//       var docHeight = $(window).height() - $(".navbar").outerHeight() ;
//       var scrollPos = $(window).scrollTop();
//       var percDown = (docHeight - scrollPos) / docHeight;
//       var navbarOpacity = 1 - (percDown * .4);
      
//       if (navbarOpacity < 0) {
//          navbarOpacity = 0;
//       } else if (navbarOpacity > 1) {
//          navbarOpacity = 1;
//       }
//       $("nav").css("opacity", navbarOpacity );
//    };
// };

// $(window).on("load resize scroll", function() {
//    navbarColorChange();
// });