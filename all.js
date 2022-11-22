// four_box
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// go to top
// call to action
function showArrow() {
  if ($(this).scrollTop() < 500) {
    $("#arrow_up").hide();
  } else {
    $("#arrow_up").show();
  }
}
$(window).scroll(showArrow);

// products fadin
// $(document).ready(function () {
//   $(this).hover(function () {
//     $(".img_hover").delay(1500).fadeIn();
//     $(this).delay(1500).fadeOut();
//   });
// });
