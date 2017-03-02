var canvas;
var scl = 64;
var vampire, mouse;
var vamp, coin, shop, sparkle;
var sparkles;

function preload()
{
	coin = loadImage("sprites/coin.png");
	vamp = loadAnimation("sprites/vampWalk1.png", "sprites/vampWalk2.png");
	
}

function setup() 
{
	canvas = createCanvas(window.innerWidth, innerHeight-28);
	vampire = new Vampire();
	mouse = new Mouse();
	gaze = new Gaze();

	var shopSprite = loadImage("sprites/shop.png");
	shop = createSprite(128,innerHeight-128);
	shop.addImage(shopSprite);

	sparkles = new Group();
	var sparkleSprite = loadImage("sprites/sparkle.png");
	for(var i = 0; i < 6; i++)
	{
		sparkle = createSprite(random(0,innerWidth), random(0,innerHeight));
		sparkle.addImage(sparkleSprite);
		sparkles.add(sparkle);
	}
	
	var coinSPrite = loadImage("sprites/coin.png");
	coin = createSprite(500,500);
	coin.addImage(coinSPrite);

	frameRate(30);
} 

function draw() {
	background(44,176,55);

	ui();
	
	push();
	drawSprites();
	pop();

	push();
	animation(vamp, vampire.x, vampire.y);
	vampire.move();
	pop();

	mouse.cursor();
	gaze.cursor();
	
	/*push();
	var targetX = dotX;
  	var diffx = eyeX - x;
  	x += diffx * easing;
  
	var targetY = dotY;
	var diffy = eyeY - y;
	y += diffy * easing;

	stroke(255,255,255,200);
	strokeWeight(2);
	fill(255,255,255, 200);
	ellipse(x - 200, y - 200, 60, 30);
	stroke(0,0,200,200);
	strokeWeight(2);
	fill(0,0,0, 200);
	ellipse(x - 200, y - 200, 10, 10);

	targetX = dotX;
	targetY = dotY;
	pop();*/

	
	debug();
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