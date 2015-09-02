$(document).ready(function(){

	// DOWNWARD //
	$('.gray').waypoint(function(direction) {
		switchColors('pink', 'gray', 'button-pink', 'button-gray');
	});
	$('.white').waypoint(function(direction) {
		switchColors('gray', 'white', 'button-gray', '');
	});

	// UPWARD //
	$('.waypoint-pink').waypoint(function(direction) {
		switchColors('gray', 'pink', 'button-gray', 'button-pink');
	}, {offset: '50'});
	$('.waypoint-gray').waypoint(function(direction) {
		switchColors('white', 'gray', '', 'button-gray');
	}, {offset: '50'});
});

function switchColors(toRemove, toAdd, buttonToRemove, buttonToAdd) {
	$('.menu-link-div').removeClass(toRemove);
	$('.menu-link-div').addClass(toAdd);
	var button = $('.menu-link-div').find('.button');
	button.removeClass(buttonToRemove);
	button.addClass(buttonToAdd);
}