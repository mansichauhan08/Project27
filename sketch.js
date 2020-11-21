
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,100,600,50);

	bob1 = new Bob(480,500,30);
	bob2 = new Bob(540,500,30);
	bob3 = new Bob(600,500,30);
	bob4 = new Bob(660,500,30);
	bob5 = new Bob(720,500,30);

	rope1 = new Rope(bob1.body, roof.body, -120,0);
	rope2 = new Rope(bob2.body,roof.body,-60,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,60,0);
	rope5 = new Rope(bob5.body,roof.body,120,0);
  
}


function draw() {
	Engine.update(engine);
	background("lightblue");

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	  
}



