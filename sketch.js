const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ball;
var rope;
var wall1,wall2,wall3,wall4;
function preload(){
   boardImg=loadImage("images/pool board .png");
   stickImg=loadImage("images/stick.png");
}
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y=0
    ball1=new Ball(600,302,18,255,60,60,1);
    ball2=new Ball(629,320,18,60, 255, 60,2);
    ball3=new Ball(629,285,18,173,28,45,3);
    ball4=new Ball(659,302,18,233,27,19,4);
    ball5=new Ball(659,337,18,99,12,24,5);
    ball6=new Ball(659,268,18,30,255,255,6);
    ball7=new Ball(690,320,18,45,45,20,7);
    ball8=new Ball(690,285,18,60,40,30,8);
    ball9=new Ball(690,355,18,50,60,200,9);
    ball10=new Ball(690,249,18,60,60,255,10);
    wall1=new Wall(500,25,1000,50);
    wall2=new Wall(500,525,1000,50);
    wall3=new Wall(25,350,50,600);
    wall4=new Wall(975,340,50,600);
    stick=new Stick(200,300);
}

function draw(){
    background(boardImg);
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    stick.display();
    if(keyIsDown(RIGHT_ARROW)){
        Matter.Body.setVelocity(stick.body,{x:15,y:-15});
    }
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stick.body,{x:200,y:300});
    }
}