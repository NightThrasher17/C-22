const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball; 







function setup() {
  createCanvas(800,800);
  
engine = Engine.create();
world = engine.world;

var options= {
  isStatic: true
}
ground=Bodies.rectangle(400,790,800,50,options);

World.add(world,ground);

var boptions={
  restitution: 1
}
ball = Bodies.circle(200,100,20,boptions)

World.add(world,ball);




}

function draw() {
  background(0);  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

}