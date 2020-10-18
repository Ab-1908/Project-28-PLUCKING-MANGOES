
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone;
var boy, boyImage;
var treeImage;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	
	stone = new Stone(20,570,40,40);
	
	boy = createSprite(100,630,100,200);
	boy.addImage(boyImage);
	boy.scale=0.1;
	
	image("treeImage",600,390,400,600);

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

	slingshot = new slingShot(stone.body,{x:50 , y:570});
	
	
  
}


function draw() {
 Engine.update(engine);
  background(0);
  
  ground.display();

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


function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
	}
	
	function mouseReleased(){
    
		slingshot.fly()
		
		}



