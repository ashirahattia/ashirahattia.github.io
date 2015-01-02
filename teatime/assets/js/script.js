$(document).ready(function(){

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) {
            $('#navigation').fadeIn(300);
        } else {
            $('#navigation').fadeOut(300);
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
});
