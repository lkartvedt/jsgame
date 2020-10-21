var x = 10;
var y = 10;
//load image onto canvas
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "images/maleColor2R.PNG";
img.onload = () =>{
	ctx.drawImage(img, x, y);
}