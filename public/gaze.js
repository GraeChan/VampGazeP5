function Gaze()
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
        this.targetX = dotX;
        var diffX = this.targetX - mouse.x;
        this.x += diffX * this.easing;
        
        this.targetY = dotY;
        var diffY = this.targetY - this.y;
        this.y += diffY * this.easing;

        stroke(255,255,255,200);
        strokeWeight(2);
        fill(255,255,255, 200);
        ellipse(this.x, this.y, 60, 30);
        stroke(0,0,200,200);
        strokeWeight(2);
        fill(0,0,0, 200);
        ellipse(this.x, this.y, 10, 10);

        pop();
    }
}