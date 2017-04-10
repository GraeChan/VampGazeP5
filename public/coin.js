function Coin()
{
    this.coin
    this.coinTotal = 0;
    this.coinUI;
    this.coinSprite = loadImage("sprites/coin.png");
    this.coins;

    this.draw = function()
    {
        this.coin = createSprite(mouse.x,mouse.y);
        this.coin.addImage(this.coinSprite);
        
        this.coins.add(this.coin);
        this.coin.depth = 1;
    }

    this.drawUiCoin = function()
    {
        push();
            this.coinUI = createSprite(110, innerHeight-198);
            this.coinUI.addImage(this.coinSprite);
            this.coinUI.scale = 0.5;
        pop();
        push();
            this.coinUI = createSprite(50, 25);
            this.coinUI.addImage(this.coinSprite);
            this.coinUI.scale = 0.5;
        pop();
    }
}