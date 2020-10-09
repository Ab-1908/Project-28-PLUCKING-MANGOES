
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone;
var boy, boyImage;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	
	stone = new Stone(20,570,40,40);
	
	boy = createSprite(70,630,100,200);
	boy.addImage(boyImage);
	boy.scale=0.1;
	
	tree = new Tree(600,390,400,600);

	mango = new Mango(600,310,50,50);
	mango2 = new Mango(650,200,50,50);
	mango3 = new Mango(690,350,50,50);
	mango4 = new Mango(500,250,50,50);
	mango5 = new Mango(700,210,50,50);
	mango6 = new Mango(500,310,50,50);
	mango7 = new Mango(600,130,50,50);
	mango8 = new Mango(750,350,50,50);
	mango9 = new Mango(750,280,50,50);
	mango10 = new Mango(550,200,50,50);

	slingshot = new slingShot(stone.body,{x:40 , y:570});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  ground.display();

  tree.display();

  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  slingshot.display();

  drawSprites();

  stone.display();
 
}



