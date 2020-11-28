class Ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.4,
            'friction':0.2,
            'density':0.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius =radius;
        this.image=loadImage("paper.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("purple");
        imageMode(RADIUS);
        image(this.image,0, 0, this.radius, this.radius);
        pop();
      }
}