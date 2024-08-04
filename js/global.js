


$(document).ready(function(){
  
  AOS.init();
  
  gsap.registerPlugin(ScrollTrigger);

    const swiper1 = new Swiper('.visual_swiper', {
    direction: 'horizontal',
      loop: true,
      speed: 700,
      slidesPerView: 1,
      pagination: {
        el: '.main-swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },


    });  

  $('.go_top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  $('.main_nav_open').on('click', function(){
    $('.main_nav_box').toggleClass('on');
    $('#nav ul li').removeClass('on');
  });

  $('.jl_floor2_open').on('click', function(){
    $(this).addClass('hide');
    $(this).siblings('.jl_floor2').addClass('active');
  });

  $(window).on('resize', function(){
    if($(window).outerWidth() > 680){
      $('.jl_floor2_open').removeClass('hide');
      $('.jl_floor2').removeClass('active');
    }
  });

  $(".dt_img_inner").mCustomScrollbar({theme:"inset-dark"});

  $(document).on('mouseup', function(e){
    var navBox = $('.main_nav_box');
    if(navBox.has(e.target).length === 0){
      navBox.removeClass('on');
      $('#nav ul li').removeClass('on');
    }
  });

  const sections = document.querySelectorAll('section');

  let observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.3
    }
  );


  let observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.15
    }
  );

  let observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.6
    }
  );

  let observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.1
    }
  );

  // sections.forEach((view, index) => {
  //   if(index == 3){
  //     observer4.observe(view);
  //   }
  //   if(index == 4){
  //     observer2.observe(view);
  //   }
  //   if(index == 5){
  //     observer4.observe(view);
  //   }
  //   else{
  //     observer1.observe(view);
  //   }
  // });

  sections.forEach((view, index) => {
    observer4.observe(view);
  });

  $('.works_list a').on('click', function(e){
    e.preventDefault();
    var tg = $(this).parent();
    var idx = tg.index();
    console.log(idx);
    $('.works_detail_tab_list').eq(idx).addClass('active').siblings().removeClass('active');
    $('.works_detail_tab').addClass('active');
    $('body').addClass('fixed');
  });

  $('.dt_close').on('click', function(){
    $('.works_detail_tab').removeClass('active');
    $('.works_detail_tab_list').removeClass('active');
    $('body').removeClass('fixed');
  });


  $(document).on('mouseup', function(e){
    var works_list = $('.works_list');
    var works_detail = $('.works_detail_tab_list');
    var detail_tabBox = $('.detail_tabBox');
    if(detail_tabBox.has(e.target).length === 0){
      works_list.removeClass('active');
      works_detail.removeClass('active');
      $('.works_detail_tab').removeClass('active');
      $('body').removeClass('fixed');
    }
  });


  
  // var controller = new ScrollMagic.Controller();

  // var tween1 = TweenMax.to('#visual', 1, {
  //   opacity: 0,
  //   ease: "power2.out",
  // });

  // var scene = new ScrollMagic.Scene({
  //   triggerElement: ".trigger1",
  //   triggerHook: 0.5,
  //   duration: "50%",
  // })

  // .setTween(tween1)
  // // .addIndicators({name: "visualOpacity"})
  // .addTo(controller);


  $('#nav ul li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
  });

var ccCursor = $('#cursor');

$(document).on('mousemove', function(e){

  ccCursor.css({
    'position': 'fixed',
    'left': e.clientX,
    'top': e.clientY
  });
});

$('.clone_coding_article article > a').on('mouseenter', function(){
  ccCursor.addClass('clonecoding_cursor');
});

$('.clone_coding_article article > a').on('mouseleave', function(){
  ccCursor.removeClass('clonecoding_cursor');
});

gsap.to('.app_ani_pic', {
});

// ScrollTrigger.defaults({
//   markers: true
// });

gsap.to(".app_ani_pic", {
  scrollTrigger: {
    scrub: 1,
    trigger: '.appeal',
    start: 'top 100%',
    end: 'bottom',
    markers: true,
  }, 
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "power1.inOut",
});

});

$(window).on('load', function(){
  setTimeout(() => {
    $('.visual_swiper').addClass('active');
  }, 100);
});




