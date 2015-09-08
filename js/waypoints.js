$(document).ready(function(){
	// DOWNWARD //
	$('.gray').waypoint(function(direction) {
		if($('#menu-link-div').hasClass('pink')) {
			switchColors('pink', 'gray', 'button-pink', 'button-gray');
		} 
		else if($('#menu-link-div').hasClass('yellow')) {
			switchColors('yellow', 'gray', 'button-yellow', 'button-gray');
		}
		else if($('#menu-link-div').hasClass('blue')) {
			switchColors('blue', 'gray', 'button-blue', 'button-gray');
		}
	});
	$('.white').waypoint(function(direction) {
		switchColors('gray', 'white', 'button-gray', '');
	});

	// UPWARD //
	$('.waypoint-pink').waypoint(function(direction) {
		switchColors('gray', 'pink', 'button-gray', 'button-pink');
	}, {offset: '50'});

	$('.waypoint-yellow').waypoint(function(direction) {
		switchColors('gray', 'yellow', 'button-gray', 'button-yellow');
	}, {offset: '50'});

	$('.waypoint-blue').waypoint(function(direction) {
		switchColors('gray', 'blue', 'button-gray', 'button-blue');
	}, {offset: '50'});



	$('.waypoint-gray').waypoint(function(direction) {
		switchColors('white', 'gray', '', 'button-gray');
	}, {offset: '50'});
});

function switchColors(toRemove, toAdd, buttonToRemove, buttonToAdd) {
	$('#menu-link-div').removeClass(toRemove);
	$('#menu-link-div').addClass(toAdd);
	var button = $('#menu-link-div').find('.button');
	button.removeClass(buttonToRemove);
	button.addClass(buttonToAdd);
}