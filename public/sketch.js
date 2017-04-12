var canvas;
var scl = 64;
var vampire, sparkles, mouse, gaze, coin, shop, castle;	// Classes
var previousMillis = 0;
var previousMillisCoin = 0;
var previousMillisHammer = 0;
var interval = 3000;
var bIsGameScreen = false;
var bIsMenuScreen = true;
var logo;
var logoSprite;
var bIsEye = true;

function setup() 
{
	canvas = createCanvas(window.innerWidth-25, window.innerHeight-25);

	sparkles = new Sparkles();
	coin = new Coin();
	
	shop = new Shop();
	castle = new Castle();

	shop.draw();
	castle.draw();
	sparkles.sparkles = new Group();
	sparkles.draw();
	coin.coins = new Group();
	coin.drawUiCoin();

	vampire = new Vampire();
	mouse = new Mouse();
	//gaze = new Gaze();

	logo = createSprite(innerWidth-250,innerHeight-126);
	logoSprite = loadImage("sprites/napierLogo.gif");

	frameRate(30);
} 

function draw() {
	background(44,176,55);

	if(bIsMenuScreen == true)
	{
		push();
			fill(255, 255, 0);
			textSize(32);
			text("Vampire's Gaze", innerWidth/2 - 25, 50);
			text("吸血鬼の視線" , innerWidth/2 - 25, 100);
			text("Avoid the Vampire's Gaze", 150, 250);
			text("Collect Coins", 150, 300);
			text("Buy Hammer to Chase and Defeat Vampire", 150, 350);
			text("Press Enter or Click Left Mouse Button to Start", 150, 500);
		pop();

		logo.removed = false;
		logo.addImage(this.logoSprite	);

		shop.shop.removed = true;
		castle.castle.removed = true;
		sparkles.sparkle.removed = true;
		coin.removed = true;
		coin.coinUI_1.removed = true;
		coin.coinUI_2.removed = true;
		mouse.eye.removed = true;
		vampire.vampire.removed = true;

		drawSprites();
		

		if(keyWentDown("Enter") || mouseWentDown(LEFT))
    	{
			bIsMenuScreen = false;
			bIsGameScreen = true;

			logo.removed = true;
			
			shop.shop.removed = false;
			castle.castle.removed = false;
			sparkles.sparkle.removed = false;
			coin.removed = false;
			coin.coinUI_1.removed = false;
			coin.coinUI_2.removed = false;
			mouse.eye.removed = false;
			vampire.vampire.removed = false;
		}
	}
	else if(bIsGameScreen== true)
	{
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

		//For Mouse Control
		mouse.cursor();
		mouse.hover();

		mouse.check();

		//For Gaze Control
		//gaze.cursor();

		drawSprites();

		ui();

		if(keyWentDown("Esc"))
    	{
			bIsGameScreen = false;
			bIsMenuScreen = true;
		}
		
	}
	
	
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
	//text("bIsEye: " + bIsEye, 15, 300);
	pop();

}