function Shop()
{
    this.shop;
    this.shopSprite = loadImage("sprites/shop.png");
    this.x = 128;
    this.y = innerHeight-128;
    this.width = 256;
    this.height = 256;
	
    this.draw = function()
    {
        this.shop = createSprite(this.x,this.y);
	    this.shop.addImage(this.shopSprite);
        this.shop.depth = 0;
    }
    
}