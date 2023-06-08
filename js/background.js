$(window).on('scroll', function(){

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 5; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  
    if(bgPosition){
      $('body').css('background-position', 'center top -'+ bgPosition + 'px');
    }
  });