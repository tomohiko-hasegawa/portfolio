$(function() {

  $(".menu-nav").hide();
  $(".menu-btn").click(function() {
    $(".menu-nav").toggle(300);
  });

  $('.scroll a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

  $(document).on('click',function(e) {
    if(!$(e.target).closest('.clickTarget').length) {
     // ターゲット要素の外側をクリックした時の操作
     $(".menu-nav").hide(300);
    } else {
     // ターゲット要素をクリックした時の操作
    }
  });

});
