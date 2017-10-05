$(document).ready(function() {
	$("input").click(function() {
		$("#" + $(this).attr("name") + "Ball").toggle();
	})
});