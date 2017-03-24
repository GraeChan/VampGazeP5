var canvas;
var scl = 64;
var vampire, sparkles, mouse, gaze, coin;
var vamp, shop; //, sparkle;
var previousMillis = 0;
var interval = 3000;
var bIsEyeOverSparkles = false;

function preload()
{
	//coin = loadImage("sprites/coin.png");
	vamp = loadAnimation("sprites/vampWalk1.png", "sprites/vampWalk2.png");
}

function setup() 
{
	canvas = createCanvas(window.innerWidth-25, window.innerHeight-25);
	
	vampire = new Vampire();
	sparkles = new Sparkles();
	coin = new Coin();

	var shopSprite = loadImage("sprites/shop.png");
	shop = createSprite(128,innerHeight-128);
	shop.addImage(shopSprite);

	sparkles.draw();

	mouse = new Mouse();
	gaze = new Gaze();

	frameRate(30);
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

	ui();

	debug();

	mouse.cursor();
	gaze.cursor();
	if(mouse.eye.overlap(sparkles))
	{
		mouse.eye.overlap(sparkles, collect);
	}
	else if(!mouse.eye.overlap(sparkles))
	{
		var currentMillis = millis();
		previousMillis = currentMillis;
	}	
	else if(gaze.eye.overlap(sparkles))
	{
		gaze.eye.overlap(sparkles, collect);
	}
	else if(!gaze.eye.overlap(sparkles))
	{
		var currentMillis = millis();
		previousMillis = currentMillis;
	}

	
}

function collect(collector, collected)
{
  //collector is another name for eye
  //show the animation
  //collector.changeAnimation("stretch");
  //collector.animation.rewind();
  //collected is the sparkles
  
  var currentMillis = millis();
  if(currentMillis - previousMillis > interval)
  {
	  collected.remove();
	  coin.draw();
	  previousMillis = currentMillis;
  }
  
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
	text("ms: " + millis().toFixed(2), 15, 100);
	pop();
}