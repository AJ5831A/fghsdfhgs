
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	gnd = new Gnd(400,690,800,10)
	box1 = new Box(700,630,10,160)
	box2 = new Box(550,645,10,40)
	box3 = new Box(625,679,150,10)
	box4 = new Box(675,550,50,10)
	pap = new Paper(100,650,50)
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine)
 gnd.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 pap.display()
 if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(pap.body,pap.body.position,{x:8,y:-8})
 }
}



