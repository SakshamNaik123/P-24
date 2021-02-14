const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, ground;
var rubber;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(700,320,180,40);
    stone = new Stone(700,320,150,80);
	ground = new Ground(600,height,1200,20)
	rubber = new Rubber(50, 50, 30, 30); 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  elipseMode(RADIUS);
  background(0);
  
  hammer.display();
  stone.display();
  ground.display();
 rubber.display();
 
  drawSprites();
 
}



