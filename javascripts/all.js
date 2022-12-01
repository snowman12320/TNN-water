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
