$(function () {
	//Hides game screen
	$(".game").hide();
	
	//display 
	var btn1 = $(".btn");
	btn1.on("click", functionA () {
		const img = new Image();
		img.src = "images/maleColor1R.PNG";
	});
	var btn2 = $(".btn2");
	btn2.on("click", functionB () {
		const img2 = new Image();
		img2.src = "images/maleColor2R.PNG";
	});
	//show game screen
	
});
	