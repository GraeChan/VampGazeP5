function Castle()
{
    this.castle;
    this.castleSprite = loadImage("sprites/castle.png");
    this.width = 160;
    this.height = 256;
    this.x = innerWidth-128;
    this.y = this.height/2 + 10;
    
	
    this.draw = function()
    {
        this.castle = createSprite(this.x,this.y);
	    this.castle.addImage(this.castleSprite);
        this.castle.depth = 0;
    }
    
}