/*Script modified from https://codepen.io/Jackthomsonn/pen/wModMm*/
$(function () {
	$(".game").hide();
	$(".select").hide();
  var btn = $(".btn");
  btn.on("click", function () {
    $(this).addClass("btn__progress");
    setTimeout(function () {
      btn.addClass("btn__progress--fill");
    }, 500);
    setTimeout(function () {
      btn.removeClass("btn__progress--fill");
    }, 4100);
    setTimeout(function () {
      btn.addClass("btn__complete");
	  $(".container").hide();
	  //$(".game").show();
	  $(".select").show();
    }, 4400);
  });
});
