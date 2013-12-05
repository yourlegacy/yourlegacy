$(document).ready(function(){

	// Smooth Scrolling
	var $root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 250, function () {
	        window.location.hash = href;
	    });
	    return false;
	});

	// Popcorn
	var videoInterview = Popcorn.youtube(
		'#video-container',
		'http://www.youtube.com/watch?v=zZ5XFYQf9rg'
	);

	videoInterview.on('ended', function(){
		$(".video-overlay").addClass('active');
		$(".video-overlay").addClass('post');
		$(".video-overlay").removeClass('pre');
	});
	
	$( ".pre" ).click(function() {
 		$(".video-overlay").removeClass('play-me');
	});

	$( ".play-me" ).click(function() {
 		$(".video-overlay").removeClass('active');
 		$(".video-overlay").removeClass('pre');
  		videoInterview.play();
	});
	// fix bug of playing entire container in post

	// Sticky
	// var menuOffset = $('#sticky')[0].offsetTop;

	// $(document).bind('ready scroll', function() {
	//     var docScroll = $(document).scrollTop();

	//     if (docScroll >= menuOffset) {
	//         $('#sticky').addClass('fixed');
	//         $('html').addClass('sticky-go');
	//     } else {
	//         $('#sticky').removeClass('fixed');            
	//         $('html').removeClass('sticky-go');
	//    }

	// });

	// Sticky Kit
	//$("#sticky ul").stick_in_parent();

	// Waypoints
	$('#sticky').waypoint('sticky');
});



