var canvas;
var scl = 64;
var vampire, sparkles, mouse, gaze;
var vamp, coin, shop; //, sparkle;
//var sparkles;

function preload()
{
	coin = loadImage("sprites/coin.png");
	vamp = loadAnimation("sprites/vampWalk1.png", "sprites/vampWalk2.png");
	
}

function setup() 
{
	canvas = createCanvas(window.innerWidth-25, window.innerHeight-25);
	vampire = new Vampire();
	sparkles = new Sparkles();

	var shopSprite = loadImage("sprites/shop.png");
	shop = createSprite(128,innerHeight-128);
	shop.addImage(shopSprite);

	sparkles.draw();

	var coinSprite = loadImage("sprites/coin.png");
	coin = createSprite(500,500);
	coin.addImage(coinSprite);

	mouse = new Mouse();
	gaze = new Gaze();

	frameRate(30);
} 

function draw() {
	background(44,176,55);

	ui();
	
	push();
	animation(vamp, vampire.x, vampire.y);
	vampire.move();
	pop();

	mouse.cursor();
	mouse.eye.overlap(sparkles, collect);
	
	gaze.cursor();
	gaze.eye.overlap(sparkles, collect);

	push();
	drawSprites();
	pop();
	
	debug();
}

function collect(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  //collector.changeAnimation("stretch");
  //collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered 
  //the event
  collected.remove();
}

function ui()
{
	push();
	noStroke();
	fill(0,0,0, 15);
	rect(0,innerHeight-128,innerWidth,128)
	pop();
}

function debug()
{
	push();
	fill(255, 255, 0);
	textSize(32);
	//text("Coins: 5", 25, 35);
	text("EyePos: " + dotX + "," + dotY, 15, 25);
	text("MousePos: " + mouseX.toFixed(2) + "," + mouseY.toFixed(2), 15, 50);
	text("FrameRate: " + frameRate().toFixed(2), 15, 75);
	pop();
}