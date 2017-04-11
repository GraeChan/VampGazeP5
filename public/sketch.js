var canvas;
var scl = 64;
var vampire, sparkles, mouse, gaze, coin, shop, castle;	// Classes
//var vampAnimWalk;
var previousMillis = 0;
var previousMillisCoin = 0;
var interval = 3000;


function preload()
{
	//vampAnimWalk = loadAnimation("sprites/vampWalk1.png", "sprites/vampWalk2.png");
}

function setup() 
{
	canvas = createCanvas(window.innerWidth-25, window.innerHeight-25);

	
	sparkles = new Sparkles();
	coin = new Coin();
	vampire = new Vampire();
	
	shop = new Shop();
	castle = new Castle();

	shop.draw();
	castle.draw();
	sparkles.sparkles = new Group();
	sparkles.draw();
	//coin.coins = new Group();
	coin.drawUiCoin();
	
	mouse = new Mouse();
	gaze = new Gaze();

	frameRate(30);
} 

function draw() {
	background(44,176,55);

	coin.check();
	sparkles.check();

	push();
	vampire.move();
	vampire.vampire.position.x = vampire.x;
	vampire.vampire.position.y = vampire.y;
	vampire.vampire.collide(shop.shop);
	vampire.vampire.collide(castle.castle);
	pop();

	debug();

	mouse.cursor();
	gaze.cursor();

	mouse.hover();
	//mouse.eye.collide(shop.shop);
	//mouse.eye.collide(castle.castle);
	//vampAnimWalk.collide(shop.shop);
  	//vampAnimWalk.collide(castle.castle);

	drawSprites();

	
	
	ui();
}

function ui()
{
	/*push();
	noStroke();
	fill(0,0,0, 15);
	rect(0,innerHeight-128,innerWidth,128)
	pop();*/

	push();
	fill(255, 255, 0);
	textSize(32);
	text("10 x " , 25, innerHeight-187); 
	pop();
}

function debug()
{
	push();
	fill(255, 255, 0);
	textSize(32);
	text("      : " + coin.coinTotal, 15, 35);
	/*text("EyePos: " + dotX + "," + dotY, 15, 75);
	text("MousePos: " + mouseX.toFixed(2) + "," + mouseY.toFixed(2), 15, 100);
	text("FrameRate: " + frameRate().toFixed(2), 15, 125);
	text("ms: " + millis().toFixed(2), 15, 150);
	text("prevMsSparkle: " + previousMillis.toFixed(2), 15, 175);
	text("prevMsCoin: " + previousMillisCoin.toFixed(2), 15, 200);
	text("sparkles: " + sparkles.sparkles.length, 15, 225);
	text("coins: " + coin.coins.length, 15, 250);*/
	pop();

}