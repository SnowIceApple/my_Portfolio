


$(document).ready(function(){
  
  AOS.init();

    const swiper1 = new Swiper('.visual_swiper', {
    direction: 'horizontal',
      loop: true,
      speed: 3000,
      slidesPerView: 1,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      effect: 'fade',
      autoplay: {
        delay: 6000,
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
      threshold: 0.4
    }
  );

  let observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.1
    }
  );
  sections.forEach((view, index) => {
    if(index == 3){
      observer2.observe(view);
    }
    else{
      observer1.observe(view);
    }
  });


  
  var controller = new ScrollMagic.Controller();

  var tween1 = TweenMax.to('#visual', 1, {
    opacity: 0,
    ease: "power2.out",
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    triggerHook: 0.5,
    duration: "50%",
  })

  .setTween(tween1)
  // .addIndicators({name: "visualOpacity"})
  .addTo(controller);


  $('#nav ul li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
  });


});

$(window).on('load', function(){
  setTimeout(() => {
    $('.visual_swiper').addClass('active');
  }, 100);
});










