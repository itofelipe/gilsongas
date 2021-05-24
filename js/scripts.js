jQuery(document).ready(function($){

	$('#up').on('click', function(e){
	    e.preventDefault();
	    var target= $(this).get(0).id == 'up' ? $('#up');
	    $('html, body').stop().animate({
	       scrollTop: target.offset().top
	    }, 1000);
	});

});
