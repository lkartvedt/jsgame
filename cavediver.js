//load image onto canvas
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "images/diver.jpg";
img.onload = () =>{
	ctx.drawImage(img, 0, 0);
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

//Make diver image move
/*function move() {
	document.onKeyAndMove;
	var diver;
	var posUp = 10;
	var posDown = 10;
	}
	//function to make diver go up if up arrow pressed
	function moveUp() {
		alert("moved up");
		posUp = posUp + 5px;
	}
	function moveDown() {
		alert("moved down");
		posDown = posDown + 5px;
	}
	//function to move image
	function getKeyAndMove(b) {
		var key_code = b.which||b.keyCode;
		switch(key_code) {
			//up arrow key
			case 38:
				moveUp();
				break;
			//down arrow key
			case 40:
				moveDown();
				break;
		}
	}
}*/