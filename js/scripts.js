$(document).ready(function() {
	
	$("#more").click(function(e) {
        e.preventDefault();
    });
	
	var offset = 300, offsetOpacity = 1200, scrollTopDuration = 700, $back_to_top = $('.top');
	
	$(window).scroll(function() {
		
		($(this).scrollTop() > offset) ? $back_to_top.addClass('top-is-visible') : $back_to_top.removeClass('top-is-visible top-fade-out');
		
		if($(this).scrollTop() > offsetOpacity)
		{
			$back_to_top.addClass('top-fade-out');
		}
	});
	
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scrollTopDuration
		);
	});
	
});