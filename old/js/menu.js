 $(document).ready(function() {
    $('.menu-link').click(function(){
      $('#menu').fadeIn(500);
    });

    $('#menu').click(function() {
      if($('#menu').is(':visible')) {
          $('#menu').fadeOut(500);
      }
    });
});