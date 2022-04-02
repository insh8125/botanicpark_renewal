$(function(){
  $('.main .btPrev').click(prevImg);
  $('.main .btNext').click(nextImg);

  function prevImg() {
      $('.artWrap .img').first().appendTo('.artWrap');
  }

  function nextImg() {
      $('.artWrap .img').last().prependTo('.artWrap');
  }
});
