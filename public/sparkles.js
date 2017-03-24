function Sparkles()
{
    this.sparkle;
    this.sparkleSprite = loadImage("sprites/sparkle.png");;
    this.sparkles;
    
    this.draw = function()
    {
        sparkles = new Group();
        for(var i = 0; i < 6; i++)
        {
            sparkle = createSprite(random(0,innerWidth), random(0,innerHeight));
            sparkle.addImage(this.sparkleSprite);
            sparkles.add(sparkle);
        }
    }

    
}