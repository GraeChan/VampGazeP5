function Coin()
{
    this.coin
    this.coinTotal = 10;
    this.coinUI_1;
    this.coinUI_2;
    this.coinSprite = loadImage("sprites/coin.png");
    this.coins = new Group();

    this.draw = function()
    {
        push();
        this.coin = createSprite(mouse.x,mouse.y);
        this.coin.addImage(this.coinSprite);
        
        this.coins.add(this.coin);
        this.coin.depth = 1;
        pop();
    }

    this.check = function()
    {
        for(var i = 0; i<this.coins.length; i++) 
        {
            var c = this.coins[i];
            
            c.position.y += sin(frameCount/10);
        }
    }

    this.drawUiCoin = function()
    {
        push();
            this.coinUI_1 = createSprite(110, innerHeight-198);
            this.coinUI_1.addImage(this.coinSprite);
            this.coinUI_1.scale = 0.5;
        pop();
        push();
            this.coinUI_2 = createSprite(50, 25);
            this.coinUI_2.addImage(this.coinSprite);
            this.coinUI_2.scale = 0.5;
        pop();
    }
}