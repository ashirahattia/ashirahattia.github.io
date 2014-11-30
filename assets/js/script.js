$(document).ready(function(){

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) {
            $('#navigation').fadeIn(100);
        } else {
            $('#navigation').fadeOut(100);
        }
    });

     $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top
         }, 1000);
         return false;
        }
      }
    });

    $('#footer-content').hover(function() {
        $('body').css('cursor','pointer');
    });

    $('#specialty').hover(function() {
        $('body').css('cursor', 'auto');
    });

    $('#footer-content').click(function() {
        $(this).text("Website built by Angira Shirahatti for the Web Design Decal, Fall 2014");
        $('body').css('cursor','auto');
    });
});
