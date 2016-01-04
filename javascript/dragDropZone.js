$(document).ready(function() {

	var mouse_down = false; 

	function on_mouse_down_square(event) { 
	 mouse_down=true; 
	} 

	function on_mouse_up(event){ 
	 mouse_down=false; 
	} 

	document.onmousemove = on_mouse_move; 

	document.onmouseup = on_mouse_up; 

	function on_mouse_move(event) { 
	  if (mouse_down === true) { 
		if(event.clientX-50<=0){
			document.querySelector('#square').style.left = 0+'px';
		} else if(event.clientX-50>300) {
			document.querySelector('#square').style.left = 300+'px'; 
		} else {
			document.querySelector('#square').style.left = event.clientX-50+'px';
		}
		
		if(event.clientY-50<=0){
			document.querySelector('#square').style.top = 0+'px';
		} else if(event.clientY-50>300) {
			document.querySelector('#square').style.top = 300+'px'; 
		} else {
			document.querySelector('#square').style.top = event.clientY-50+'px';
		}
		
		
		if(event.clientY-50>=0 && event.clientY-50<300) {
			document.querySelector('#square').style.top = event.clientY-50+'px'; 
		}

	  } 
	}
}