const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var paper1,paper_image;
var stick1,stick2,stick3;
var ground,invisibleGround,ground2;
var dust,dust_image;
function preload(){
  dust_image=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
  paper1 = new Paper(200,350,20,20);
  paper1.scale = 10;

  ground = new Ground(200,400,1000,10);
  invisibleGround = new Ground(200,390,1000,10);
  invisibleGround.visible = false;

  stick1 = new Stick(432, 341, 15,100);
  stick1.visible = false;
  stick2 = new Stick(548, 341, 15,100);
  stick2.visible = false;
  stick3 = new Stick(490, 382, 100,15);
  stick3.visible = false;
  
  dust=createSprite(490 , 341, 10,10);
	dust.addImage(dust_image);
  dust.scale=0.4;

  ground2 = new Ground(490,377,100,50);   

}


function draw() {
  background(0);            
  Engine.update(engine); 

  paper1.display();
  keyPressed();
  ground.display();
  ground2.display();
  stick1.display();
  stick2.display();
  stick3.display();
 
  drawSprites();
  
}


function keyPressed(){
  if(keyCode === 32 && paper1.body.position.x < 320){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-7});
  }
  if(keyCode === 32 && paper1.body.position.x > 320){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:18});
  }

}









