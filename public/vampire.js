function Vampire()
{
	this.x = window.innerWidth - 100;
	this.y = window.innerHeight -  100;
	this.width = 90;
	this.height = 128;
	this.xDir = 0;
	this.yDir = 0;

	this.left = true;
	this.right = false;
	this.up = false;
	this.down = false;

	this.direction = function()
	{
		if(this.left == true)
		{
			this.right = true;
		}
		if (this.right == true)
		{
			this.left = true;
		}
	}

	this.move = function()
	{
		if(vampire.left == true)
		{
			if(vampire.x > window.innerWidth/1.25)
			{
				vampire.x-=1;
			}
			else
			{
				vampire.left = false;
				vampire.right = true;
			}
		}
		
		if(vampire.right == true)
		{
			if (vampire.x <= window.innerWidth - this.width)
			{
				vampire.x+=1;
			}
			else
			{
				vampire.left = true;
				vampire.right = false;
			}
			
		}
		
		
	
	}

}