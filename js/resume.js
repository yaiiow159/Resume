$(document).ready(function () {
    
    $('.scrollTop').click(function (e) { 
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;

        $('html, body').animate({ scrollTop:targetPos },1000);
    });

    $(window).scroll(function () { 
         var windowHeight = $(window).height();
         var scrollPos = $(window).scrollTop();

         $('.animated').each(function (e) { 
             var thisPos = $(this).offset().top;

             if ((scrollPos + windowHeight) >= thisPos) {
                 
                $(this).addClass('fadeIn');
             } else {
                 $(this).removeClass('fadeIn');
             }
         });
       
    });

});