var x = 0;
var y = 0;
//load image onto canvas
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "images/maleColor1R.PNG";
img.onload = () =>{
	ctx.drawImage(img, x, y);
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.addEventListener('keydown', checkKeyPressed, true);


function up() {
	y = y - 10;
	ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
	ctx.drawImage(img, x, y);
}
function down() {
	y = y + 10;
	ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
	ctx.drawImage(img, x, y);
}



//write function for checkKeyPressed
function checkKeyPressed(event){
	//alert("checks key pressed");
	switch(event.keyCode) {
		//up key pressed 38
		case 38:
			//alert("up");
			up();
			break;
		//down key pressed 40
		case 40:
			//alert("down");
			down();
			break;		
	}
}

