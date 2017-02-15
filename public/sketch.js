var canvas;
var vampire;
var vamp, coin, shop, sparkle;
var sparkles;

function preload()
{
	coin = loadImage("sprites/coin.png");
	vamp = loadAnimation("sprites/vampWalk1.png", "sprites/vampWalk2.png");
	
}

function setup() 
{
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	vampire = new Vampire();
	
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

	frameRate(60);
}

function draw() {
	background(44,176,55);

	push();
	drawSprites();
	pop();

	push();
	animation(vamp, vampire.x, vampire.y);
	vampire.move();
	pop();

	push();
	fill(255,255,255);
	ellipse(dotX, dotY, 15, 15);
	pop();

	push();
	fill(255,255,255);
	ellipse(mouseX, mouseY, 15, 15);
	pop();

	drawSprites();

	debug();
}

function debug()
{
	push();
	fill(255, 255, 0);
	textSize(32);
	text("Coins: 5", 25, 35);
	//text("EyePos: " + dotX + "," + dotY, 15, 25);
	//text("MousePos: " + mouseX + "," + mouseY, 15, 50);
	//text("FrameRate: " + frameRate().toFixed(2), 15, 75);
	pop();
}