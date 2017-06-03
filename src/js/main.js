$(document).ready(function () {
  sectionScroll();
  recoverPasswordScreen();
  scrollMagicForSell();
  
  AOS.init({
    duration: 1000
  });
});

//Function: Recovery password modal
function recoverPasswordScreen() {
  $('.recover-pw-link').on('touchstart click',function(){
    $('.recover-pw-wrapper').addClass('is-active');
  });
  $('.login-go-back').on('touchstart click',function(){
    $('.recover-pw-wrapper').removeClass('is-active');
  });
}

//Function for section smooth scroll
function sectionScroll() {
  var sections = $('section.common-section'), 
      nav = $('.navbar'), 
      nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + nav_height;
    
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
      if(cur_pos >=0 && cur_pos < ( $('#home').offset().top + $('#home').outerHeight() )) {
        nav.find('.navbar-link').removeClass('active');
        nav.find('.navbar-link[href="#home"]').addClass('active');
      }
      else if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a.navbar-link').removeClass('active');
        sections.removeClass('active');
        
        $(this).addClass('active');
        nav.find('a.navbar-link[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
      
    });
  });

  nav.find('a.navbar-link').on('touchstart click', function () {
    var id = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 700);
    
    return false;
  });
}

//Function for section How To Sell
function scrollMagicForSell() {
  if($(window).width() >= 768) {
    var controller = new ScrollMagic.Controller();
    // define movement of panels
    var wipeAnimation = new TimelineMax().to("#slideContainer", 1,   {x: "-80%"})


    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "400%"
    })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addTo(controller);

    var horizontal = new ScrollMagic.Scene({
      offset: 50,
      duration: 300
    }).addTo(controller);
    

    $(window).on('scroll touchmove', function() {
        var seller_offset = $("#pinContainer").offset().top;
        var posHowToSell = seller_offset - $(window).scrollTop();
        
        if(posHowToSell === 0) {
          var xPosition = Math.round(document.querySelector('#slideContainer')._gsTransform.xPercent);
          var strXPos = ''+xPosition;

          if(strXPos >= '-0' && strXPos < '-20'){
              $(".sell-pagination .sell-page").removeClass("active");
              $(".sell-number-1").parent().addClass("active")
          }
          else if(strXPos >= '-20' && strXPos < '-40'){
              $(".sell-pagination .sell-page").removeClass("active");
              $(".sell-number-2").parent().addClass("active")
          }
          else if(strXPos >= '-40' && strXPos < '-60'){
              $(".sell-pagination .sell-page").removeClass("active");
              $(".sell-number-3").parent().addClass("active")
          }
          else if(strXPos >= '-60' && strXPos < "-80"){
              $(".sell-pagination .sell-page").removeClass("active");
              $(".sell-number-4").parent().addClass("active")
          }
          else if(strXPos == '-80'){
              $(".sell-pagination .sell-page").removeClass("active");
              $(".sell-number-5").parent().addClass("active")
          }
        }
    });

    // On click of pagination bullets
    var sliderButtons = $('.sell-pagination li a');
    sliderButtons.on('touchstart click', function(e){
      var target = e.currentTarget.innerText;
      sliderButtons.parent().removeClass('active');
      $(this).parent().addClass('active');
      switch(target){
        case '1': 
          TweenMax.to("#slideContainer", 1,   {x: "-0%"});
          break;
        case '2': 
          TweenMax.to("#slideContainer", 1,   {x: "-20%"});
          break;
        case '3': 
          TweenMax.to("#slideContainer", 1,   {x: "-40%"});
          break;
        case '4': 
          TweenMax.to("#slideContainer", 1,   {x: "-60%"});
          break;
        case '5': 
          TweenMax.to("#slideContainer", 1,   {x: "-80%"});
          break;
      }
    });
  }
}