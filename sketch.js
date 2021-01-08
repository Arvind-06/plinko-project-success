const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var balls = [];
var pegs = [];
var divisions = [];
var divisionHeight=200;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  Ground = new Ground(width/2,height,width,20);

  for(var i = 0; i<=800; i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
  
     pegs.push(new Peg(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     pegs.push(new Peg(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     pegs.push(new Peg(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     pegs.push(new Peg(j,375));
  }

  

  
}



function draw() {
background("yellow");
textSize(20)
//text("Score : "+score,20,30);
Engine.update(engine);
Ground.display();

 for (var i = 0; i < pegs.length; i++) {
   
   pegs[i].display();
   
 }
 if(frameCount%60===0){
   balls.push(new Ball(random(100, 700), 10,10));
 }

for (var j = 0; j < balls.length; j++) {
 
   balls[j].display();
 }
 for (var k = 0; k < divisions.length; k++) {
   
   divisions[k].display();
 }
}