
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roofObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Paper(230,300,30);
	bob2 = new Paper(260,300,30,);
	bob3 = new Paper(290,300,30);
	bob4 = new Paper(320,300,30);
	bob5 = new Paper(350,300,30);

	
	fill ("red")
	roof = new Roof(350,120,250,15);
	
	
	rope1 = new Rope(bob1.body,roof.body,-60*2,4);
	rope2 = new Rope(bob2.body,roof.body,-90,4);
    rope3 = new Rope(bob3.body,roof.body,-60,4);
    rope4 = new Rope(bob4.body,roof.body,-30,4);
    rope5 = new Rope(bob5.body,roof.body,3,4);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  drawSprites();
 
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

roof.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


}

function keyPressed(){

if(keyCode === UP_ARROW){

	console.log("hi");
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:1,y:0});


}


}







