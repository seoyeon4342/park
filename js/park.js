$(document).ready(function(){
	$("#top>button").click(function(){
		console.log( $(this).text() );
		$("#body>nav").slideToggle();
		if( $(this).text()=="close" ){
			$(this).text("dehaze");
		} else { 
			$(this).text("close");
		}
	});
	
	$("a").click(function(){
		$("#body>nav").slideUp();
		$("#top>button").text("dehaze");
	});
});///////////////////////끝!