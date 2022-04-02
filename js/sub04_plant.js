$(function(){
  $('.navWrap li').click(function(){
    var i = $(this).index();
    var hoff = $('.content').eq(i).offset().top;
    $('html').animate({scrollTop: hoff});
  });
});
