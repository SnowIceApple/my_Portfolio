


$(document).ready(function(){
  
  AOS.init();

    const swiper1 = new Swiper('.works_swiper', {
    direction: 'horizontal',
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      centeredSlides: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
    //   autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false
    //   },

      navigation: {
        nextEl: '.wks_btn.next',
        prevEl: '.wks_btn.prev',
      },

      breakpoints:{
        568: {
            slidesPerView: 'auto',
        },
      },

    });  



  $(window).scroll(function(){

    function mainScrollEffect(){
        const scroll = $(this).scrollTop();
        const {scrollHeight,clientHeight,scrollTop} = document.documentElement;
        const scroll2 = scrollTop / (scrollHeight-clientHeight);
        const upScroll = -scroll/4;
        const upScroll2 = -scroll/3;
        const upScroll3 = -scroll/20;
        const upScroll4 = -scroll2 * 130;
    
        $('.scroll_up').css({'transform' : 'translate3d(0,'+ upScroll +'px,0)'});
        $('.scroll_up2').css({'transform' : 'translate3d(0,'+ upScroll2 +'px,0)'});
        $('.scroll_up3').css({'transform' : 'translate3d(0,'+ upScroll3 +'px,0)'});
        $('.scroll_up4').css({'transform' : 'translate3d(0,'+ upScroll4 +'px,0)'});
    
        console.log(upScroll);
    }

    if($(window).scrollTop() < $('#intro').offset().top){
        mainScrollEffect();
    }

    var span_txt_anchor = $('#visual').innerHeight() / 2;

    if($(window).scrollTop() > span_txt_anchor){
      $('.top_txt span').text('Top');
    }
    else{
      $('.top_txt span').text('Hello!');
    }
});


  $('.go_top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  $('.main_nav_open button').on('click', function(){
    $('.main_nav').addClass('on');
    $('body').addClass('fixed');
  });

  $('.main_nav_close button').on('click', function(){
    $('.main_nav').removeClass('on');
    $('body').removeClass('fixed');
  });

  $('.nav_link a').on('click', function(){
    $('.main_nav').removeClass('on');
    $('body').removeClass('fixed');
  });

  $('.multi_link').on('click', function(e){
    $(this).toggleClass('active');
  });

  $(window).on('resize', function(){
    if($(window).innerWidth() > 1280){
        $('.multi_link').removeClass('active');
    }
  });

  $('.main_contact ul li').on('mouseenter', function(){
    $(this).removeClass('alarm_active');
  });

  $(document).on('mouseup', function(e){
    var main_contact_pop = $('.main_contact ul li');
    if(main_contact_pop.has(e.target).length === 0){
        main_contact_pop.removeClass('alarm_active');
    }
  });

  function alarm_on() {
    var min = 10,
      max = 30;
    var randonNum = Math.floor(Math.random() * (max - min + 1) + min); 
    $('.main_contact ul li').addClass('alarm_active');
    setTimeout(alarm_on, randonNum * 1000);
  }
  
  alarm_on()




});


$(window).on('load', function(){
    $('.main_nav_open').addClass('pop_up');

    var randomNumStandard = $('.works_list').length;
    console.log(randomNumStandard);

    var randomIndex = Math.floor(Math.random() * randomNumStandard); 
    var randomNotice = $(".works_list").eq(randomIndex); 
    randomNotice.addClass("wide").removeClass('basic'); 
    randomNotice.siblings().addClass('basic')
  });










