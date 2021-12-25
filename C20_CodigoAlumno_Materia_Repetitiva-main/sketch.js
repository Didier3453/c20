
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall,wall1;
var angle = 60;
var ops;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  };
     
  /*var rock_options = {
    restitution: 0.1,
  };*/

   var ground_options ={
     isStatic: true
   };

   var ops_options ={
    isStatic: true
  };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  //rock = Bodies.circle(200,20,40,rock_options);
  //World.add(world,rock);
  
  wall = Bodies.rectangle(120,280,40,20,ground_options);
  World.add(world,wall);

  wall1 = Bodies.rectangle(250,100,10,30,ground_options);
  World.add(world,wall1);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wall1,angle);
  push();
  translate(wall1.position.x,wall1.position.y);
  rotate(angle);
  pop();
  angle += 0.1;

  /*fill("gray");
  ellipse(rock.position.x,rock.position.y,30);*/

  fill("cyan");
  rect(wall.position.x,wall.position.y,200,30);

  fill("black");
  ellipse(ball.position.x,ball.position.y,20);

  fill("green");
  rect(ground.position.x,ground.position.y,400,20);

  fill("cyan");
  rect(wall1.position.x,wall1.position.y,20,100);
  
}

