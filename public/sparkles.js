function Sparkles()
{
    this.sparkle;
    this.sparkleSprite = loadImage("sprites/sparkle.png");;
    this.sparkles;
    this.sparklesNum = 0;
    this.sparklesMax = 6;
    
    this.draw = function()
    {
        //sparkles = new Group();
        for(var i = 0; i < this.sparklesMax; i++)
        {
            this.sparkle = createSprite(random(200,innerWidth-200), random(200,innerHeight-200));
            this.sparkle.addImage(this.sparkleSprite);
            this.sparkles.add(this.sparkle);
            this.sparkle.depth = 1;
        }

        
    }

        
    

    this.drawNew = function()
    {
        this.sparkle = createSprite(random(200,innerWidth-200), random(200,innerHeight-200));
        this.sparkle.addImage(this.sparkleSprite);
        this.sparkles.add(this.sparkle);
        this.sparkle.depth = 1;

    }

    
}