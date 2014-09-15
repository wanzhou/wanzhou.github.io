$(document).ready(function(){
    $(window).scroll(function(){
        var scrollh = $(window).scrollTop();
        if( scrollh > 200 ){
            $('#to-top').fadeIn('fast');
        }else{
            $('#to-top').stop().fadeOut('fast');
        }
    });
    $('#to-top').on( 'click', function( event ){
        $('html,body').animate({scrollTop: '0px'}, 500);
    });
    $('#to-top').hover(function(){
        $('#to-top-title').show().css('display','block');
    }, function(){
        $('#to-top-title').hide();
    });
});