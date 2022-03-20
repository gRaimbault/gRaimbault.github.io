$(document).ready(function() {
	$('#nav-button').click(function(){
		if($('#mainMenu').hasClass("collapse")) {
			$('#mainMenu').removeClass("collapse");
			$('#nav-button').addClass("buttonOn");
		} else {
			$('#mainMenu').addClass("collapse");
			$('#nav-button').removeClass("buttonOn");
		}
	});



	//$('.info-to-know').hover($(this).next('.info-content').slideToggle(),$(this).next('.info-content').slideToggle());

	$(".info-to-know").on({
	    click: function () {
	        //stuff to do on mouse enter
	        $(this).next('.info-content').slideToggle();
	    }/*,
	    mouseleave: function () {
	        //stuff to do on mouse leave
	        $(this).next('.info-content').slideToggle();
	    }*/
	});
});
