$(function(){

  // BANNER SLIDER
  $('.banner-text-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    dots: true,
  });

  // TESTIMONIAL SLIDER
  $('.test-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    dots: true,
  });

})

$ (window).scroll(function(){
  if($(window).scrollTop () > 500){
    $('.navbar') .addClass ('nav-scroll');
  }
  else{
    $('.navbar') .removeClass ('nav-scroll');
  }
    
  
})