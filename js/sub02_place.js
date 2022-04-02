$(function () {
  console.log('h');

  $('.reverse .btns .b1').click(prevImg);
  $('.garden .btns .b1').click(nextImg);
  $('.culture .btns .b1').click(nextImage);

  function prevImg(){
    $('.reverse li').eq(2).prependTo('.reverse .img');
  }

  function nextImg(){
    $('.garden li').eq(0).appendTo('.garden .img');
  }

  function nextImage(){
    $('.culture li').eq(0).appendTo('.culture .img');
  }

  $('.navWrap li').click(function(){
    var i = $(this).index();
    var hoff = $('.content').eq(i).offset().top;
    $('html').animate({scrollTop: hoff});
  });
});
