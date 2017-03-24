function Coin()
{
    this.coin;
    this.coinSprite = loadImage("sprites/coin.png");

    this.draw = function()
    {
        this.coin = createSprite(mouse.x,mouse.y);
        this.coin.addImage(this.coinSprite);
        this.coin.depth = 1;
    }
}