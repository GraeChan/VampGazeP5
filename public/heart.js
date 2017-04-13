function Heart()
{
    this.heart;
    this.heartSprite = loadImage("sprites/heart.png");
    this.lives = 3;
    
    this.draw = function()
    {
        this.heart = createSprite(50, 100);
        this.heart.addImage(this.heartSprite);
    }
}