


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

  const sections = document.querySelectorAll('section');
  const navList = document.querySelectorAll('#nav ul li');

  var observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.3
    }
  );


  var observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.15
    }
  );

  var observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.6
    }
  );

  var observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('view', entry.isIntersecting);
    });
  },
    {
      threshold: 0.1
    }
  );

  // let navTrFs = false;

  var observerNav = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const idx = Array.from(sections).indexOf(entry.target);
      var idxPos = idx * 130;
      var navDeco = $('.main_nav_list_deco');

      console.log(idx);

      if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
        $(entry.target).addClass('view').siblings().removeClass('view');
          $(navList[idx]).addClass('on').siblings().removeClass('on');
          navDeco.css('left', idxPos + 'px');
      }

    });
  },
  {
    threshold: [0, 0.2]
  }

  );

  // $(navList).on('click', function(){
  //   navTrFs = true;
  //   var idx = $(this).index();
  //   var sectionPos = sections[idx].offsetTop;
  //   var idxPos = idx * 130;
  //   var navDeco = $('.main_nav_list_deco');

  //   $(this).addClass('on').siblings().removeClass('on');

  //   navDeco.css('left', idxPos + 'px');
  // });

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
    observerNav.observe(view);
  });

  if($(window).outerWidth() < 768){
    $('#nav ul li').on('click', function(){
      $('.main_nav_box').removeClass('on');
      $('body').removeClass('fixed');
    });
  }

  $(window).on('resize', function(){
    if($(window).outerWidth() < 768){
      $('#nav ul li').on('click', function(){
        $('.main_nav_box').removeClass('on');
        $('body').removeClass('fixed');
      });
    }
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
			scrub: 1.7
  }
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



});

$(window).on('load', function(){
  setTimeout(() => {
    $('.visual_swiper').addClass('active');
  }, 100);
});




