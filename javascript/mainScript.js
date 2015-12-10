$(document).ready(function() {

	var bodyHeight = $("body").height();
	var bodyWidth = $("body").width();

	if (bodyHeight < bodyWidth) {
		$(".circle").width(bodyHeight);
		$(".circle").height(bodyHeight);
		$(".circle").css("border-radius", bodyHeight);
	} else {
		$(".circle").width(bodyWidth);
		$(".circle").height(bodyWidth);
		$(".circle").css("border-radius", bodyWidth);
	}


	$(".imgInCircle").click(function(){
		$(".imgInCircle").addClass("imgInCircleClicked");
	});

	$(".next-button").click(nextPage);

	function nextPage() {
		var pageId = parseInt(this.parentElement.id.slice(-1));
		var nextPageId = pageId + 1;
		$("#wholePage" + pageId).fadeToggle("slow", function() {
			$("#wholePage" + nextPageId).fadeToggle("slow");
		});
	}


});
