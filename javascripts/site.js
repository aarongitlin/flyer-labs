// This is where it all goes :)

var containerWidth = $(".blocks-list").width();
var spanHeight = $(this).find("span").height();
$(".basic-info__title").width((containerWidth * .85)).height(114);
$(".text-block__title, .guestlist__title").width((containerWidth * .65)).height(64);

$(".basic-info__title").textfill({
  maxFontPixels: 112
});
$(".text-block__title").textfill({
  maxFontPixels: 64
});
$(".guestlist__title").textfill({
  maxFontPixels: 64
});

$( window ).bind("resize", function(){
  var containerWidth = $(".basic-info").width();
  var spanHeight = $(this).find("span").height();
  $(".basic-info__title").width((containerWidth * .85));
  $(".text-block__title, .guestlist__title").width((containerWidth * .65));
});

$( window ).bind("resize", function(){
  $(".basic-info__title").textfill({
    maxFontPixels: 112
  });
  $(".text-block__title").textfill({
    maxFontPixels: 64
  });
  $(".guestlist__title").textfill({
    maxFontPixels: 64
  });
});
