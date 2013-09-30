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
		'http://www.youtube.com/watch?v=CxvgCLgwdNk' 
	);

	videoInterview.on('ended', function(){
		$(".video-overlay").addClass('active');
		$(".video-overlay").addClass('post');
		$(".video-overlay").removeClass('pre');
	});

	$( ".play-me" ).click(function() {
 		$(".video-overlay").removeClass('active');
 		$(".video-overlay").toggleClass('pre');
  		videoInterview.play();
	});
	
	$( ".play-me.pre" ).click(function() {
 		$(".video-overlay").removeClass('play-me');
	});
});