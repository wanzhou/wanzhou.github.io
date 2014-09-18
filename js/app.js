$(document).ready(function(){
    (function($){
        $('[data-toggle="tooltip"]').tooltip();
        $('table').addClass('table table-bordered table-striped table-hover');
        $('table').wrap('<div class="table-responsive"></div>');
        $('table tr th').addClass('success');
        $('p > img').wrap('<a class="thumbnail"></a>');
    })(jQuery);
    $(window).scroll(function(){
        var scrollh = $(window).scrollTop();
        if( scrollh > 200 ){
            $('#to-top, #to-top-xs').fadeIn('fast');
        }else{
            $('#to-top, #to-top-xs').stop().fadeOut('fast');
        }
    });
    $('#to-top, #to-top-xs').on( 'click', function( event ){
        $('html,body').animate({scrollTop: '0px'}, 500);
    });
    $('#to-top,#to-top-xs').hover(function(){
        $('#to-top-title, #to-top-title-xs').show().css('display','block');
    }, function(){
        $('#to-top-title, #to-top-title-xs').hide();
    });
});
