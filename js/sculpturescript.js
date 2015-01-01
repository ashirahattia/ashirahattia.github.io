$(document).ready(function() {

	$('.link').magnificPopup({
		type:'image',
		closeOnContentClick: true,
		closeOnBgClick: true,
		gallery:{
		  enabled:true
		}
	});

});


$(window).load(function() {
	$('.grid').masonry({
		columnWidth: '.sizer',
		itemSelector: '.item2',
		'gutter': 10
	});
});