$(function() {



  $('.slider__inner').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2500,
    nextArrow: '<button class="slick-btn slick-next"></button>',
    prevArrow: '<button class="slick-btn slick-prev"></button>'

  });


  $('select').styler();





});