    
    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $('#back').fadeIn();
        }else{
            $('#back').fadeOut();
        }
    });

    $('#back').click(function(){
        $('body,html').animate({
            scrollTop: 0
        },800);
        return false;
    })
