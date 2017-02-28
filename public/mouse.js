function Mouse()
{
    this.x = 0;
    this.y = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.easing = 0.1;
    this.diffX; //= targetX - x;
    this.diffY; //= targetY - y;

    this.cursor = function()
    {
        push();
        mouse.targetX = mouseX;
        var diffX = mouse.targetX - mouse.x;
        mouse.x += diffX * mouse.easing;
        
        mouse.targetY = mouseY;
        var diffY = mouse.targetY - mouse.y;
        mouse.y += diffY * mouse.easing;

        stroke(255,255,255,200);
        strokeWeight(2);
        fill(255,255,255, 200);
        ellipse(mouse.x, mouse.y, 60, 30);
        stroke(0,0,200,200);
        strokeWeight(2);
        fill(0,0,0, 200);
        ellipse(mouse.x, mouse.y, 10, 10);

        //mouse.targetX = mouseX;
        //mouse.targetY = mouseY;
        pop();
    }
}