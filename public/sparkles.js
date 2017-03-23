function Sparkles()
{
    this.sparkle;
    this.sparkleSprite;
    this.sparkles;
    
    this.draw = function()
    {
        sparkles = new Group();
        sparkleSprite = loadImage("sprites/sparkle.png");
        for(var i = 0; i < 6; i++)
        {
            sparkle = createSprite(random(0,innerWidth), random(0,innerHeight));
            sparkle.addImage(sparkleSprite);
            sparkles.add(sparkle);
        }
    }

    
}