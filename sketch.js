
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin
function preload()
{
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(600,350,1200,20)
bin1=new Bin(770,270,20,100)
bin2=new Bin(890,270,20,100)
bin3=new Bin(830,330,100,20)
ball=new Ball(300,200,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  image(dustbin,755,220,150,120)
  ball.display();
  
  drawSprites();
 
}



function keyPressed(){
	if (keyCode === UP_ARROW){


		Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});


	}
}