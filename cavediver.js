var x = 180;
var y = 250;
var bgx = 0;
var t = 0;
var scale = 26;
var interval_ID = 0;
var button_click = false;
//load image onto canvas
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const start_button = document.getElementById("start_button");
const end_stats = document.getElementById("end_stats");
const home_button = document.getElementById("home_button");
const play_again_button = document.getElementById("play_again_button");
const diver1_button = document.getElementById("diver1_button");
const diver2_button = document.getElementById("diver2_button");


//Start Background Image
const decorated_background = new Image();
decorated_background.setAttribute('crossOrigin', 'Anonymous');
decorated_background.src = "https://i.imgur.com/yz6LZ4m.png"; //images/decorated_background.PNG
decorated_background.onload = () =>{
	ctx.drawImage(decorated_background, 0, 0, decorated_background.width * 0.3, decorated_background.height * 0.3);
}

//Diver 1
const diver1 = new Image();
diver1.setAttribute('crossOrigin', 'Anonymous')
diver1.src = "https://i.imgur.com/wW2etM4.png"; //male_color_1.PNG

//Diver 2
const diver2 = new Image();
diver2.setAttribute('crossOrigin', 'Anonymous')
diver2.src = "https://i.imgur.com/FJc6tu3.png"; //male_color_2.PNG

//Diver
var diver = diver1; //default

//Cave Walls
const  b1 = new Image(); b1.setAttribute('crossOrigin', 'Anonymous'); b1.src = "https://i.imgur.com/zV5hCVX.png";
const  b2 = new Image(); b2.setAttribute('crossOrigin', 'Anonymous'); b2.src = "https://i.imgur.com/zPaUh4z.png";
const  b3 = new Image(); b3.setAttribute('crossOrigin', 'Anonymous'); b3.src = "https://i.imgur.com/6bTTZht.png";
const  b4 = new Image(); b4.setAttribute('crossOrigin', 'Anonymous'); b4.src = "https://i.imgur.com/UFx9UvF.png";
const  t1 = new Image(); t1.setAttribute('crossOrigin', 'Anonymous'); t1.src = "https://i.imgur.com/639as54.png";
const  t2 = new Image(); t2.setAttribute('crossOrigin', 'Anonymous'); t2.src = "https://i.imgur.com/6BaUWgd.png";
const  t3 = new Image(); t3.setAttribute('crossOrigin', 'Anonymous'); t3.src = "https://i.imgur.com/5v2kLiB.png";
const  t4 = new Image(); t4.setAttribute('crossOrigin', 'Anonymous'); t4.src = "https://i.imgur.com/SrKrpN2.png";
var bottoms = [b1, b2, b3, b4];
var tops = [t1, t2, t3, t4];
var top_indices = [0, 1];
var bottom_indices = [2, 3];

//Cave Walls for Collision
const  b1_b = new Image(); b1_b.setAttribute('crossOrigin', 'Anonymous'); b1_b.src = "https://i.imgur.com/KRayrTY.png";
const  b2_b = new Image(); b2_b.setAttribute('crossOrigin', 'Anonymous'); b2_b.src = "https://i.imgur.com/DBGTHXw.png";
const  b3_b = new Image(); b3_b.setAttribute('crossOrigin', 'Anonymous'); b3_b.src = "https://i.imgur.com/kVrlhfF.png";
const  b4_b = new Image(); b4_b.setAttribute('crossOrigin', 'Anonymous'); b4_b.src = "https://i.imgur.com/CUwN4Js.png";
const  t1_b = new Image(); t1_b.setAttribute('crossOrigin', 'Anonymous'); t1_b.src = "https://i.imgur.com/oWdRCjR.png";
const  t2_b = new Image(); t2_b.setAttribute('crossOrigin', 'Anonymous'); t2_b.src = "https://i.imgur.com/fdJng4y.png";
const  t3_b = new Image(); t3_b.setAttribute('crossOrigin', 'Anonymous'); t3_b.src = "https://i.imgur.com/hzW8h1s.png";
const  t4_b = new Image(); t4_b.setAttribute('crossOrigin', 'Anonymous'); t4_b.src = "https://i.imgur.com/azOZ0jo.png";
var bottoms_b = [b1_b, b2_b, b3_b, b4_b];
var tops_b = [t1_b, t2_b, t3_b, t4_b];
var top_b_indices = [0, 1];
var bottom_b_indices = [2, 3];
var diver_points_x = [0, 251, 1646, 2048, 1895, 1523, 67];
var diver_points_y = [388, 826, 638, 376, 235, 192, 325];


function selectCharacter(){
	start_button.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

	diver1_button.style.display = "block";
	diver2_button.style.display = "block";

	ctx.drawImage(diver1, 150, 150, diver1.width / 9, diver1.height / 9);
	ctx.drawImage(diver2, 400, 140, diver2.width / 11, diver2.height / 11);
}

function diver1Selected(){
	diver = diver1;
	startGame();
}

function diver2Selected(){
	diver = diver2;
	startGame();
}

function startGame() {
	diver1_button.style.display = "none";
	diver2_button.style.display = "none";
	start_button.style.display = "none";
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	interval_ID = setInterval(renderScene, 16.667);
}

function resetGame(){
	x = 180;
	y = 250;
	bgx = 0;
	t = 0;
	scale = 26;
	interval_ID = 0;
	top_b_indices = [0, 1];
	bottom_b_indices = [2, 3];
	top_indices = [0, 1];
	bottom_indices = [2, 3];

  	end_stats.style.display = "none";
  	play_again_button.style.display = "none";
  	home_button.style.display = "none";
}

function gameOver(){
	clearInterval(interval_ID);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(decorated_background, 0, 0, decorated_background.width * 0.3, decorated_background.height * 0.3);
	if(Math.round(t/60) == 1){
		const time_alive = document.getElementById("time_alive").innerHTML =  "1 second";
	}else{
		const time_alive = document.getElementById("time_alive").innerHTML =  Math.round(t/60) + " seconds";
	}

  	end_stats.style.display = "block";
  	play_again_button.style.display = "block";
  	home_button.style.display = "block";
}

function home(){

	resetGame();

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(decorated_background, 0, 0, decorated_background.width * 0.3, decorated_background.height * 0.3);
	start_button.style.display = "block";

}

function playAgain(){
	resetGame();
	startGame();
}


function drawDiver() {
	ctx.drawImage(diver, x, y, diver.width / scale, diver.height / scale);
}

function drawUpperCaveWalls() {
	ctx.drawImage(tops[top_indices[0]], bgx, 0, canvas.width, tops[top_indices[0]].height * 0.3);
	ctx.drawImage(tops[top_indices[1]], bgx + canvas.width, 0, canvas.width, tops[top_indices[1]].height * 0.3);
}

function drawLowerCaveWalls() {
	ctx.drawImage(bottoms[bottom_indices[0]], bgx, 0, canvas.width, bottoms[bottom_indices[0]].height * 0.3);
	ctx.drawImage(bottoms[bottom_indices[1]], bgx + canvas.width, 0, canvas.width, bottoms[bottom_indices[1]].height * 0.3);
}

function collisionCheck(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.drawImage(tops_b[top_b_indices[0]], bgx, 0, canvas.width, tops_b[top_b_indices[0]].height * 0.3);
	ctx.drawImage(tops_b[top_b_indices[1]], bgx + canvas.width, 0, canvas.width, tops_b[top_b_indices[1]].height * 0.3);

	ctx.drawImage(bottoms_b[bottom_b_indices[0]], bgx, 0, canvas.width, bottoms_b[bottom_b_indices[0]].height * 0.3);
	ctx.drawImage(bottoms_b[bottom_b_indices[1]], bgx + canvas.width, 0, canvas.width, bottoms_b[bottom_b_indices[1]].height * 0.3);
	
	for(let i = 0; i < diver_points_y.length; i++){
		var rgba = ctx.getImageData(x+diver_points_x[i] / scale, y+diver_points_y[i] / scale, 1, 1).data.reduce((a, b) => a + b, 0);
		if(rgba == 255){
			return true;
		}
	}

	return false;
}

function renderScene(){
	bgx -= 1 + 0.25*(t/600);
	t++;

	if(up_flag){
		y -= 2  + 0.25*(t/600);
	}

	if(down_flag){
		y += 2  + 0.25*(t/600);
	}

	if(left_flag){
		x -= 2  + 0.25*(t/600);
		if(x < 0) {
			x = 0;
		}
	}

	if(right_flag){
		x += 2  + 0.25*(t/600);
		if(x > canvas.width - diver.width / scale) {
			x = canvas.width - diver.width / scale;
		}
	}

	if(bgx < -canvas.width){
		var rand_cave = Math.floor(Math.random() * 4);
		top_indices[0] = top_indices[1];
		top_indices[1] = rand_cave;
		top_b_indices[0] = top_b_indices[1];
		top_b_indices[1] = rand_cave;

		rand_cave = Math.floor(Math.random() * 4);
		bottom_indices[0] = bottom_indices[1];
		bottom_indices[1] = rand_cave;
		bottom_b_indices[0] = bottom_b_indices[1];
		bottom_b_indices[1] = rand_cave;

		bgx = 0;
	}

	if(collisionCheck()) {
		gameOver();
		return;
	}


	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawUpperCaveWalls();
	drawLowerCaveWalls();
	drawDiver();
}


//DARK MODE CODE START///////////////////////////////////////////////////////////////////////////////
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
//DARK MODE CODE END/////////////////////////////////////////////////////////////////////////////////


//PLAYER MOVEMENT CODE START/////////////////////////////////////////////////////////////////////////
document.addEventListener('keydown', checkKeyDown, true);
document.addEventListener('keyup', checkKeyUp, true);

var up_flag = false;
var down_flag = false;
var left_flag = false;
var right_flag = false;

//write function for checkKeyPressed
function checkKeyDown(e){
	e.view.event.preventDefault();
	switch(e.keyCode) {
		case 37:
			left_flag = true;
			break;
		//up key pressed 38
		case 38:
			up_flag = true;
			break;
		case 39:
			right_flag = true;
			break;
		//down key pressed 40
		case 40:
			down_flag = true;
			break;
		case 13:
			startGame();
			break;		
	}
}

function checkKeyUp(e){
	e.view.event.preventDefault();
	switch(e.keyCode) {
		case 37:
			left_flag = false;
			break;
		//up key pressed 38
		case 38:
			up_flag = false;
			break;
		case 39:
			right_flag = false;
			break;
		//down key pressed 40
		case 40:
			down_flag = false;
			break;		
	}
}
//PLAYER MOVEMENT CODE END///////////////////////////////////////////////////////////////////////////


