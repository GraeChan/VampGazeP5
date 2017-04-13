var canvas;
var scl = 64;
var vampire, sparkles, mouse, gaze, coin, shop, castle;	// Classes
var previousMillis = 0;
var previousMillisCoin = 0;
var previousMillisHammer = 0;
var interval = 3000;
var bIsGameScreen = false;
var bIsMenuScreen = true;
var bIsHelpScreen = false;
var bIsCreditsScreen = false;
var logo, title;
var logoSprite, titleSprite;
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

	logo = createSprite(innerWidth-250,775);
	logoSprite = loadImage("sprites/napierLogo.gif");
	title = createSprite(innerWidth/2,400/2);
	titleSprite = loadImage("sprites/title.png");

	buttonStart = createButton('START');
  	buttonStart.position(innerWidth/2 - 100, innerHeight/2);
	buttonStart.size(200,50);
  	buttonStart.mousePressed(start);
	
	buttonHelp = createButton('HELP');
  	buttonHelp.position(innerWidth/2 - 100, innerHeight/2 + 75);
	buttonHelp.size(200,50);
  	buttonHelp.mousePressed(help);
	
	buttonCredits = createButton('CREDITS');
  	buttonCredits.position(innerWidth/2 - 100, innerHeight/2 + 150);
	buttonCredits.size(200,50);
  	buttonCredits.mousePressed(credits);

	buttonBack = createButton('BACK');
  	buttonBack.position(innerWidth/2 - 100, innerHeight/2 + 150);
	buttonBack.size(200,50);
  	buttonBack.mousePressed(back);

	frameRate(30);
} 

function start()
{
	bIsMenuScreen = false;
	bIsGameScreen = true;
	bIsHelpScreen = false;
	bIsCreditsScreen = false;

	logo.removed = true;
	title.removed = true;
	
	shop.shop.removed = false;
	castle.castle.removed = false;
	sparkles.sparkle.removed = false;
	coin.removed = false;
	coin.coinUI_1.removed = false;
	coin.coinUI_2.removed = false;
	mouse.eye.removed = false;
	vampire.vampire.removed = false;

	buttonStart.hide();
	buttonHelp.hide();
	buttonCredits.hide();
	buttonBack.hide();
}

function help()
{
	bIsMenuScreen = false;
	bIsGameScreen = false;
	bIsHelpScreen = true;
	bIsCreditsScreen = false;

	buttonStart.hide();
	buttonHelp.hide();
	buttonCredits.hide();
	buttonBack.show();

	
}

function credits()
{
	bIsMenuScreen = false;
	bIsGameScreen = false;
	bIsHelpScreen = false;
	bIsCreditsScreen = true;

	buttonStart.hide();
	buttonHelp.hide();
	buttonCredits.hide();
	buttonBack.show();

	
}

function back()
{
	bIsMenuScreen = true;
	bIsGameScreen = false;
	bIsHelpScreen = false;
	bIsCreditsScreen = false;
}

function draw() {
	background(44,176,55);

	if(bIsMenuScreen == true)
	{
		push();
			//fill(255, 255, 0);
			textSize(32);
			text("Graeme Alexander Burr - 40291449", innerWidth/2 - 250, 800);
		pop();

		logo.removed = false;
		logo.addImage(this.logoSprite);
		title.removed = false;
		title.addImage(this.titleSprite);
		title.position.x += sin(frameCount/10);

		shop.shop.removed = true;
		castle.castle.removed = true;
		sparkles.sparkle.removed = true;
		coin.removed = true;
		coin.coinUI_1.removed = true;
		coin.coinUI_2.removed = true;
		mouse.eye.removed = true;
		vampire.vampire.removed = true;

		buttonStart.show();
		buttonHelp.show();
		buttonCredits.show();
		buttonBack.hide();

		drawSprites();
		

		/*if(keyWentDown("Enter") || mouseWentDown(LEFT))
    	{
			bIsMenuScreen = false;
			bIsGameScreen = true;

			logo.removed = true;
			logoEng.removed = true;
			
			shop.shop.removed = false;
			castle.castle.removed = false;
			sparkles.sparkle.removed = false;
			coin.removed = false;
			coin.coinUI_1.removed = false;
			coin.coinUI_2.removed = false;
			mouse.eye.removed = false;
			vampire.vampire.removed = false;
		}*/
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
			bIsEye = true;
		}
		
	}
	else if(bIsHelpScreen == true)
	{
		push();
			//fill(255, 255, 0);
			textSize(32);
			
			text("Avoid the Vampire's Gaze", innerWidth/2-250, 250);
			text("Collect Coins", innerWidth/2 - 250, 350);
			text("Buy Hammer to Chase and Defeat Vampire", innerWidth/2-250, 450);
		
		pop();
	}
	else if(bIsCreditsScreen == true)
	{
		push();
			//fill(255, 255, 0);
			textSize(32);
			text("Game Programming by Graeme Burr", innerWidth/2-250, 250);
			text("Gaze Track library by Augusto Esteves - Obrigado", innerWidth/2 - 250, 350);
			text("Artwork by Mai Mishima - Arigatou", innerWidth/2-250, 450);
		pop();
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