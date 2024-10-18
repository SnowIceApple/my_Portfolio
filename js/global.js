


$(document).ready(function(){
  
  AOS.init();
  
  gsap.registerPlugin(ScrollTrigger);

    var swiper1 = new Swiper('.visual_swiper', {
    direction: 'horizontal',
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      duration: 700,
      slidesPerView: 1,
      pagination: {
        el: '.main-swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      // autoplay: {
      //   delay: 7000,
      //   disableOnInteraction: false,
      // },

      navigation: {
        nextEl: '.sbn',
        prevEl: '.sbp',
      },

      on: {
        init: function(){
          $('.vt_ani').each(function(){
            $(this).children('span').each(function(){
              var tg = $(this);
              var idx = tg.index();
              if($(this).parent('.vt_ani').closest('.swiper-slide').hasClass('swiper-slide-active')){
                tg.css('transition-delay', 1.1 + (idx * 0.1) + 's');
              }
          });
          });
        },

        slideChange: function(){
          $('.vt_ani').each(function(){
              $(this).children('span').each(function(){
                var tg = $(this);
                var idx = tg.index();
                if($(this).closest('.swiper-slide').hasClass('swiper-slide-active')){
                  tg.css('transition-delay', 0.3 + 's');
                }
                else{
                  tg.css('transition-delay', 1.1 + (idx * 0.1) + 's');
                }
              });
          });
          var idx = this.realIndex;
          if(idx === 1){
            $('.visual').addClass('dark');
          }
          else{
            $('.visual').removeClass('dark');
          }

        },


      },


    });  

gsap.to("#visual", {
  opacity: 0,
  scrollTrigger: {
    scrub: 1, 
    trigger: "#visual",
    start: "60% top", 
    end: "85%",
    // markers: true,
  }
});

gsap.to(".vis_txt_box", {
  scale: 0.5,
  scrollTrigger: {
    scrub: 1, 
    trigger: "#visual",
    start: "50% top", 
    end: "100%",
    // markers: true,
  }
});

var stopMarquee = $('.infinite_list .floor1 > li');
var stopMarqueeTrigger = $('#visual');

stopMarquee.each(function(index, smt){
  ScrollTrigger.create({
    trigger: smt,
    start: "0%",
    onEnter: function(){
      $(stopMarquee).addClass('stop_ani');
    },
    onLeaveBack: function(){
      $(stopMarquee).removeClass('stop_ani');
    }
  });
});

gsap.to(".infinite_list .floor1 .ltr", {
  x: '15%',
  y: '-80%',
  scrollTrigger: {
    scrub: 10,
    trigger: '#visual',
    start: "0%", 
    end: "300%",
  }

});

gsap.to(".infinite_list .floor1 .rtl", {
  x: '-15%',
  y: '-80%',
  scrollTrigger: {
    scrub: 10,
    trigger: '#visual',
    start: "0%", 
    end: "300%",
  }

});

  $('.go_top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  $('.main_nav_open').on('click', function(){
    $(this).toggleClass('on');
    $('.main_nav_box').toggleClass('on');
    $('body').toggleClass('fixed');
    $('#nav ul li').removeClass('on');

  });


  $('.jl_floor2_open').on('click', function(){
    $(this).addClass('hide');
    $(this).siblings('.jl_floor2_cont').addClass('active');
    var tg = $(this);
    var ClsjlFloor2 = tg.siblings().children('.jl_floor2');
    var ClsjlFloor2Cont = ClsjlFloor2.parent('.jl_floor2_cont');
    var ClsjlFloor2Height = ClsjlFloor2.outerHeight();

    ClsjlFloor2Cont.css('max-height', ClsjlFloor2Height + 'px');
  });

  // $('window').on('resize', function(){
  //   clearTimeout(this.id);
  //   this.id = setTimeout(resizeDone, 300);
  // });

  // function resizeDone(){
  //   if($(window).outerWidth() > 680){
  //     $('.jl_floor2_cont').css('max-height', 9999 + 'px');
  //   }
  //   else{
  //     $('.jl_floor2_cont').css('max-height', 0 + 'px');
  //   }
  // }

    $(window).on('resize', function(){

      var outerWidth = $(window).outerWidth();

      if(outerWidth > 680){
        $('.jl_floor2_open').removeClass('hide');
        $('.jl_floor2_cont').removeClass('active');
      }

      $('.jl_floor2_cont').each(function(){
        var tg = $(this);
        var floor2OuterHeight = tg.children('.jl_floor2').outerHeight();

        if(outerWidth > 680 && $(this).not('.active')){
          tg.css('max-height', 9999 + 'px');
        }
        if(outerWidth < 680 && $(this).not('.active')){
          tg.css('max-height', 0 + 'px');
        }
        if(outerWidth < 680 && tg.hasClass('active')){
          tg.css('max-height', floor2OuterHeight + 'px');
        }

      });
    });

  // $(".dt_img_inner").mCustomScrollbar({theme:"inset-dark"});

  // $(document).on('mouseup', function(e){
  //   var navBox = $('.main_nav_box');
  //   if(navBox.has(e.target).length === 0){
  //     navBox.removeClass('on');
  //     $('#nav ul li').removeClass('on');
  //   }
  // });

  // let navTrFs = false;

    $(document).on('mouseup', function(e){
    var navBox = $('.main_nav_box');
    if(navBox.has(e.target).length === 0 && !$('.works_detail_tab').is(e.target) && $('.works_detail_tab').has(e.target).length === 0){
      navBox.removeClass('on');
      $('body').removeClass('fixed');
    }
  });

  var job_introImg = $('.job_introImg_box');



  if($(window).outerWidth() < 768){
    $('#nav ul li').on('click', function(){
      $('.main_nav_box').removeClass('on');
      $('body').removeClass('fixed');
    });
  }

  $('#nav ul li').on('click', function(){
    $('.main_nav_box').removeClass('on');
    $('body').removeClass('fixed');
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

gsap.from('.job_introImg_box', {
  scale: 0.45,
  opacity: 0,
  borderRadius: "20vw",
  scrollTrigger: {
      trigger: ".job_introImg",
			start: "top bottom", 
			end: "center 75%", 
			scrub: 1.7
  }
});

gsap.to('.job_introImg_box', {
  scale: 1,
  opacity: 1,
  borderRadius: "0",
  scrollTrigger: {
      trigger: ".job_introImg",
			start: "top bottom", 
			end: "center 75%", 
			scrub: 1.7,

  },
});

gsap.to('.job_introImg', {
  scrollTrigger: {
    trigger: ".job_introImg",
    start: "90% bottom", 
    onEnter: function(){
      $('.job_introImg_box').addClass('on');
    },
    onLeaveBack: function(){
      $('.job_introImg_box').removeClass('on');
    },  
},
});

// ScrollTrigger.defaults({
//   markers: true
// });

gsap.to(".app_ani_pic", {
  scrollTrigger: {
    scrub: 3,
    trigger: '.appeal',
    start: 'top 100%',
    end: 'bottom',
    // markers: true,
  }, 
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "power1.inOut",
});



$('.dt_img_inner').each(function(){
  $(this).on('scroll', function(){
    if($(this).scrollTop() > 0){
      $(this).parents('.detail_tabBox').addClass('active');
    }
    else{
      $(this).parents('.detail_tabBox').removeClass('active');
    }
  });
});

$('.clone_coding_article').each(function(){
  $(this).on('click', function(){
    if($(window).outerWidth() <= 1280){
      $(this).addClass('noti_off');
    }
  });
});

$(window).on('resize', function(){

  $('.clone_coding_article').each(function(){
    if($(window).outerWidth() >= 1280 && $(this).not('.noti_off')){
      $('.clone_coding_article').removeClass('noti_off');
    }
  });
});

var cloneArticle = $('.clone_coding_article');

cloneArticle.each(function(index, ca){
  ScrollTrigger.create({
    trigger: ca,
    start: "top 86%",
    onEnter: function(){
      $(ca).addClass('on noti_view line_on');
    },
    onLeaveBack: function(){
      $(ca).removeClass('noti_view line_on');
    }
  });
});

var highLight = $('.ssl_txt span');

highLight.each(function(index, hl){
  ScrollTrigger.create({
    trigger: hl,
    start: "top 86%",
    onEnter: function(){
      $(hl).addClass('hl');
    },
    onLeaveBack: function(){
      $(hl).removeClass('hl');
    }
  });
});

// $('.vt_ani').each(function(){
//   $(this).children('span').each(function(){
//     var tg = $(this);
//     var idx = tg.index();
//     console.log(idx);
//     tg.css('transition-delay', 5 + (idx * 0.1) + 's');
//   });
// });


});





