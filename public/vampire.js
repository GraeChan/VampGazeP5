function Vampire()
{
	this.vampire = createSprite(this.x, this.y);
	this.vampire.addAnimation("walk", "sprites/vampWalk1.png", "sprites/vampWalk2.png");
	this.vampire.depth = 3;
	
	this.x = window.innerWidth - 100;
	this.y = window.innerHeight -  100;
	this.width = 90;
	this.height = 128;
	this.xDir = 0;
	this.yDir = 0;

	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;

	this.direction = function()
	{
		if(this.x - mouse.x > 10)
		{
			this.left = true;
			this.right = false;
		}
		else if(this.x - mouse.x < -10)
		{
			this.left = false;
			this.right = true;
		}
		else
		{
			this.left = false;
			this.right = false;
		}
		

		if(this.y - mouse.y > 10)
		{
			this.up = true;
			this.down = false;
		}
		else if(this.y - mouse.y < -10)
		{
			this.up = false;
			this.down = true;
		}
		else
		{
			this.up = false;
			this.down = false;
		}
	}

	this.move = function()
	{
		this.direction();

		if(this.left == true)
		{
			this.vampire.mirrorX(+1);
			this.x-=1;
			
		}
		
		if(this.right == true)
		{
			this.vampire.mirrorX(-1);
			this.x+=1;
		}
		
		if(this.up == true)
		{
			
			this.y-=1;
			
		}

		if(this.down == true)
		{
			this.y+=1;
			
		}
	
	}

}