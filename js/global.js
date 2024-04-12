


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



//   $(window).scroll(function(){

//     function mainScrollEffect(){
//         const scroll = $(this).scrollTop();
//         const {scrollHeight,clientHeight,scrollTop} = document.documentElement;
//         const scroll2 = scrollTop / (scrollHeight-clientHeight);
//         const upScroll = -scroll/4;
//         const upScroll2 = -scroll/3;
//         const upScroll3 = -scroll/20;
//         const upScroll4 = -scroll2 * 130;
    
//         $('.scroll_up').css({'transform' : 'translate3d(0,'+ upScroll +'px,0)'});
//         $('.scroll_up2').css({'transform' : 'translate3d(0,'+ upScroll2 +'px,0)'});
//         $('.scroll_up3').css({'transform' : 'translate3d(0,'+ upScroll3 +'px,0)'});
//         $('.scroll_up4').css({'transform' : 'translate3d(0,'+ upScroll4 +'px,0)'});
    
//         console.log(upScroll);
//     }

//     if($(window).scrollTop() < $('#intro').offset().top){
//         mainScrollEffect();
//     }

//     var span_txt_anchor = $('#visual').innerHeight() / 2;

//     if($(window).scrollTop() > span_txt_anchor){
//       $('.top_txt span').text('Top');
//     }
//     else{
//       $('.top_txt span').text('Hello!');
//     }
// });


  $('.go_top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  $('.main_nav_open').on('click', function(){
    $('.main_nav_box').toggleClass('on');
    $('#nav ul li').removeClass('on');
  });

  $('#nav ul li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
  });


});











