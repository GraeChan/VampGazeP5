function Sparkles()
{
    this.sparkle;
    this.sparkleSprite = loadImage("sprites/sparkle.png");;
    this.sparkles;
    this.sparklesMax = 6;
    
    
    this.draw = function()
    {
        //sparkles = new Group();
        //if(this.sparkles.length < 6)
        //for(var i = 0; i < this.sparklesMax; i++)
        {
            this.sparkle = createSprite(random(200,innerWidth-200), random(200,innerHeight-200));
            this.sparkle.addImage(this.sparkleSprite);
            this.sparkles.add(this.sparkle);
            this.sparkle.depth = 1;
            //this.scale= 0.0001;
            
        }

        
    }

    this.check = function()
    {
        {
            for(var i = 0; i<this.sparkles.length; i++) 
            {
                var s = this.sparkles[i];
                
                //s.position.y += sin(frameCount/10);
                s.scale += cos(frameCount/2);
            }
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