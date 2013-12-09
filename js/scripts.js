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
		'#wayne-interview',
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

});



