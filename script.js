$(function() {

  $(".menu-nav").hide();
  $(".meue-btn").click(function() {
    $(".menu-nav").toggle(300);
  });

  $(".menu-nav a").click(function() {
    $(".menu-nav").hide(300);
  });

  $('.scroll a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
    });

});
