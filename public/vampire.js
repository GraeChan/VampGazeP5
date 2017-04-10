function Vampire()
{
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
		if(this.x - mouse.x >= 0)
		{
			this.right = false;
			this.left = true;
		}
		else if(this.x - mouse.x < 0)
		{
			this.left = false;
			this.right = true;
		}
	}

	this.move = function()
	{
		this.direction();

		if(this.left == true)
		{
			if(this.y > window.innerHeight - shop.height && this.x > shop.width + this.width/2)
			{
				if(this.x > mouse.x)
				{
					this.x-=1;
				}
				
			}
			if(this.y > window.innerHeight - shop.height && this.x <= shop.width + this.width/2)
			{
				this.y-=1;
			}
			
		}
		
		if(this.right == true)
		{
			if (this.x <= mouse.x)
			{
				this.x+=1;
			}
			
			
		}
		
		if(this.up == true)
		{
			if(this.y > mouse.y)
			{
				this.y-=1;
			}
			
			
		}

		if(this.down == true)
		{
			if (this.x <= mouse.y)
			{
				this.x+=1;
			}
			else
			{
				this.left = true;
				this.right = false;
			}
			
		}
	
	}

}