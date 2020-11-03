// ENGINE
// world
// bodies


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

var engine;
var world;
var ground;
var  box1;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,10,ground_option);
  World.add(world,ground);
  box1=new box();
  console.log(box1);
}
function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  box1.display();
  drawSprites();
}