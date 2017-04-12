function Mouse()
{
    this.x = 0;
    this.y = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.easing = 0.1;
    this.diffX; //= targetX - x;
    this.diffY; //= targetY - y;

    this.eye = createSprite(this.x,this.y);
    this.eye.addAnimation("eyes", "sprites/eyes.png");
    this.eye.addAnimation("hammer", "sprites/hammer.png");
    this.eye.playing = false;
    
    animation(this.eye, this.x,this.y);

    this.cursor = function()
    {
        

        push();
        this.targetX = mouseX;
        var diffX = this.targetX - this.x;
        this.x += diffX * this.easing;
        
        this.targetY = mouseY;
        var diffY = this.targetY - this.y;
        this.y += diffY * this.easing;

        //var eyeSprite = loadImage("sprites/coin.png");
        //coin = createSprite(this.x,this.y);
        
        this.eye.position.x = this.x;
        this.eye.position.y = this.y;
        

        /*stroke(255,255,255,200);
        strokeWeight(2);
        fill(255,255,255, 200);
        ellipse(this.x, this.y, 60, 30);
        stroke(0,0,200,200);
        strokeWeight(2);
        fill(0,0,0, 200);
        ellipse(this.x, this.y, 10, 10);*/
        
        pop();

    }

    this.hover = function()
    {
        var currentMillis = millis();
        
        if(this.eye.overlap(sparkles.sparkles || sparkles.sparkle))
        {
            this.eye.overlap(sparkles.sparkles, this.collectSparkle);
        }
        else if (!this.eye.overlap(sparkles.sparkles) ) 
        {
            previousMillis = currentMillis;
        }
        
        if(this.eye.overlap(coin.coins))
        {
            this.eye.overlap(coin.coins, this.collectCoin);
        }
        else if (!this.eye.overlap(coin.coins || coin.coin) ) 
        {
            previousMillisCoin = currentMillis;
        }

        if(coin.coinTotal >= 10 && this.eye.overlap(shop.shop))
        {
            this.eye.overlap(shop.shop, this.collectHammer)
            
            
        }
        else if(!this.eye.overlap(shop.shop))
        {
            previousMillisHammer = currentMillis;
        }

        
    }

    this.check = function()
    {
        if(bIsEye == true)
        {
            mouse.eye.changeAnimation("eyes");
        }
        if(bIsEye == false)
        {
            mouse.eye.changeAnimation("hammer");
        }
    }

    this.collectSparkle = function(collector, collected)
    {
    //collector is the eye
    //collected is the sparkles
    
        var currentMillis = millis();
        //text("collect: " , 50, 100);
        
        if(currentMillis - previousMillis > interval)
        {
            collected.remove();
            //sparkles.draw();
            coin.draw();
            
            previousMillis = currentMillis;
            //previousMillisCoin = currentMillis;
        }
    
    }

    this.collectCoin = function(collector, collected)
    {
    //collector is the eye
    //collected is the coins

        var currentMillis = millis();
        //text("collectCoin: " , 50, 100);
        
        if(currentMillis - previousMillisCoin > interval)
        {
            collected.remove();
            coin.coinTotal += 1;
            sparkles.draw();
            previousMillisCoin = currentMillis;
        }
        
    }

    this.collectHammer = function(collector, collected)
    {
    //collector is the eye
    //collected is the Hammer from shop

        var currentMillis = millis();
        //text("collectCoin: " , 50, 100);
        
        if(currentMillis - previousMillisHammer > interval)
        {
            
            //collected.remove();
            coin.coinTotal -= 10;
            
            bIsEye = false;
            //bIsHammer = true;
            
            previousMillisHammer = currentMillis;
        }
        
    }

}