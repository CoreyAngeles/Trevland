$(document).ready(function () {
  $(".sliders").slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='btn-slick-prev pull-left btn btn-slider'><img src='./images/arrow-prev.svg' alt='prev'></button>",
    nextArrow:
      "<button type='button' class='btn-slick-next pull-right btn btn-slider'><img src='./images/arrow-next.svg' alt='next'></button>",
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1101,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 851,
        settings: {
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 551,
        settings: {
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".mobile-menu").click(function () {
    $(".mobile-menu span").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overlay");
  });

  $(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(this).scrollTop() > 99) {
      $(".header-top").addClass("header-top_fixed");
    } else {
      $(".header-top").removeClass("header-top_fixed");
    }
  });
});

AOS.init({
  duration: 1200,
});
