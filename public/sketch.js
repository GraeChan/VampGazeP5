var canvas;


function setup() 
{
	canvas = createCanvas(1920, 1080);
	
}

function draw() {
	background(44,176,55);
	
	push();
	fill(255,255,255);
	ellipse(dotX, dotY, 15, 15);
	pop();

	push();
	fill(255,255,255);
	ellipse(mouseX, mouseY, 15, 15);
	pop();

	debug();
}

function debug()
{
	push();
	fill(255, 255, 255);
	textSize(16);
	text("EyePos: " + dotX + "," + dotY, 15, 25);
	text("MousePos: " + mouseX + "," + mouseY, 15, 50);
	text("FrameRate: " + frameRate().toFixed(2), 15, 75);
	pop();
}