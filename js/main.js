$(document).ready(function(){
 
  /*Ссылки якори(Если bootstrap не будет работать)*/
  $('ul.menu a[href^="#"').click(function(){
    var target = $(this).attr('href');  
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    return false;
  });
  $('button[href^="#"').click(function(){
    var target = $(this).attr('href');  
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    return false;
  });
  /*Кнопка наверх*/
  $(window).scroll(function(){
    if ($(this).scrollTop() !=0)
      $('#toTop').fadeIn();
    else
      $('#toTop').fadeOut();
  });
  $('#toTop').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
})