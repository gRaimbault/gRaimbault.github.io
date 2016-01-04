$(document).ready(function() {

	var mouse_down = false; 

	$('.healObject').on('touchstart', function(e) {
		$('.healObject').removeClass('active');
		$(this).addClass('active');
		on_mouse_down_square(e);
	});

	function on_mouse_down_square(event) { 
		event.preventDefault();
		mouse_down=true; 
	} 

	function on_mouse_up(event){ 
		mouse_down=false; 
	} 

	document.ontouchmove = on_mouse_move; 

	document.ontouchend = on_mouse_up; 

	function on_mouse_move(event) { 
	  if (mouse_down === true) { 
		if(event.touches[0].clientX-60<=0){
			document.querySelector('.active.healObject:not(.placed)').style.left = 0+'px';
		} else if(event.touches[0].clientX-60>440) {
			document.querySelector('.active.healObject:not(.placed)').style.left = 440+'px'; 
		} else {
			console.log(event.touches[0].clientX);
			document.querySelector('.active.healObject:not(.placed)').style.left = event.touches[0].clientX-60+'px';
		}
		
		if(event.touches[0].clientY-246<=0){
			document.querySelector('.active.healObject:not(.placed)').style.top = 0+'px';
		} else if(event.touches[0].clientY-246>440) {
			document.querySelector('.active.healObject:not(.placed)').style.top = 440+'px'; 
		} else {
			console.log(event.touches[0].clientY);
			document.querySelector('.active.healObject:not(.placed)').style.top = event.touches[0].clientY-246+'px';
		}
		
		
		if(event.touches[0].clientY-246>=0 && event.touches[0].clientY-60<440) {
			document.querySelector('.active.healObject:not(.placed)').style.top = event.clientY-246+'px'; 
		}

	  } 
	} 
});