$(document).ready(function(){

    $('.heart3').waypoint(function(direction) {
          $('#one').fadeToggle(1500);
          $('#two').fadeToggle(1500);
    }, {offset: '-270'});

});
