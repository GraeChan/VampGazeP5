function Shop()
{
    this.shop;
    this.shopSprite = loadImage("sprites/shop.png");
   
	
    this.draw = function()
    {
        this.shop = createSprite(128,innerHeight-128);
	    this.shop.addImage(this.shopSprite);
    }
    
}