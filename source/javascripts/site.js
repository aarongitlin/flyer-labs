//
// // Get and set widths for the titles within their containers
// var containerWidth = $(".blocks-list").width();
// $(".basic-info__title").width((containerWidth * .85)).height(115);
// $(".text-block__title, .guestlist__title").width((containerWidth * .65)).height(64);
//
// // Initialize textfill with min and max font sizes
// $(".basic-info__title").textfill({
//   maxFontPixels: 88
// });
// $(".text-block__title").textfill({
//   maxFontPixels: 64
// });
// $(".guestlist__title").textfill({
//   maxFontPixels: 64
// });
//
// var containerHeight = 115;
// var textHeight = $(".basic-info__title > span").height();
// var newMargin = textHeight - containerHeight;
// $(".basic-info__title").css( "margin-bottom", newMargin );
//
// // Bind the same width calculations to resize events, so it's calcualted on the fly
// $( window ).bind("resize", function(){
//   var containerWidth = $(".basic-info").width();
//   $(".basic-info__title").width((containerWidth * .85));
//   $(".text-block__title, .guestlist__title").width((containerWidth * .65));
//
// // Bind the textfill plugin on resize as well, using the widths calculated above
//   $(".basic-info__title").textfill({
//     maxFontPixels: 112
//   });
//   $(".text-block__title").textfill({
//     maxFontPixels: 64
//   });
//   $(".guestlist__title").textfill({
//     maxFontPixels: 64
//   });
//
//   var containerHeight = 115;
//   var textHeight = $(".basic-info__title > span").height();
//   var minMargin = 44;
//   var newMargin = textHeight - containerHeight;
//   $(".basic-info__title").css( "margin-bottom", newMargin );
// });
