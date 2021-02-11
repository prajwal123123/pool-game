class Stick{
    constructor(x,y){
        var options={
          frictionAir:0.015,
          mass: 7.5,
          restitution:1
        }
        this.body= Bodies.circle(x,y,25,options);
        this.width=25
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("white");
        stroke("black");
        strokeWeight(3);
        circle(this.body.position.x,this.body.position.y,this.width);
    }
}