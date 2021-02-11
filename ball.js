class Ball {
    constructor(x, y,radius,r,g,b,num) {
      var options = {
          restitution:1,
          frictionAir:0.015
         
      }
      this.body = Bodies.circle(x,y,radius, options);
      this.radius = radius;
      this.r= r;
      this.g=g;
      this.b= b;
      this.num=num;
      World.add(world, this.body);
    }
    display(){
     if(this.body.position.x>=0 && this.body.position.x<=50 && this.body.position.y>=0 && this.body.position.y<=80||
     this.body.position.x>=0 && this.body.position.x<=50 && this.body.position.y>=510 && this.body.position.y<=600||
     this.body.position.x>=500 && this.body.position.x<=550 && this.body.position.y>=0 && this.body.position.y<=80||
     this.body.position.x>=500 && this.body.position.x<=550 && this.body.position.y>=590 && this.body.position.y<=600||
     this.body.position.x>=900 && this.body.position.x<=950 && this.body.position.y>=0 && this.body.position.y<=80||
     this.body.position.x>=900 && this.body.position.x<=950 && this.body.position.y>=590 && this.body.position.y<=600){
       World.remove(world,this.body);
     }
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //fill("white");
      //circle(0,0,this.width-2);
      rotate(angle);
      ellipseMode(RADIUS);  
      fill("purple");
      ellipse(0,0, this.radius,18);
      fill("white");
      textSize(25);
      textAlign(CENTER);
      text(this.num,0,10);
      pop();
    }
  }
