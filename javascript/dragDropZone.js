$(document).ready(function() {

	var mouse_down = false; 

	$('.connectedGlass.healObject').on('touchstart', function(e) {
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
		if(event.touches[0].clientX-50<=0){
			document.querySelector('.connectedGlass.healObject').style.left = 0+'px';
		} else if(event.touches[0].clientX-50>300) {
			document.querySelector('.connectedGlass.healObject').style.left = 300+'px'; 
		} else {
			document.querySelector('.connectedGlass.healObject').style.left = event.touches[0].clientX-50+'px';
		}
		
		if(event.touches[0].clientY-50<=0){
			document.querySelector('.connectedGlass.healObject').style.top = 0+'px';
		} else if(event.touches[0].clientY-50>300) {
			document.querySelector('.connectedGlass.healObject').style.top = 300+'px'; 
		} else {
			document.querySelector('.connectedGlass.healObject').style.top = event.touches[0].clientY-50+'px';
		}
		
		
		if(event.touches[0].clientY-50>=0 && event.touches[0].clientY-50<300) {
			document.querySelector('.connectedGlass.healObject').style.top = event.clientY-50+'px'; 
		}

	  } 
	} 
});