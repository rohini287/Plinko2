const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1
var particles=[];
var plinkos=[];
var divisions=[]
var divisionHeight=300;
var score=0
var gamestate=0


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
 
  ground1= new Ground(width/2,height,width,20);

  for (var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for (var j=75;j<=width;j=j+50){
    plinkos.push(new plinko(j,75))
  }
  
  for (var j=50; j<+width-10;j=j+50){
    plinkos.push(new plinko(j,175))
  }
  for (var j=75; j<+width-10;j=j+50){
    plinkos.push(new plinko(j,275))
  }
  for (var j=50; j<+width-10;j=j+50){
    plinkos.push(new plinko(j,375))
  }

  
  



}


  
  

function draw() {
 
  background(0); 
  textSize(20);
  fill("white");
  text("score:"+score,10,30);
  Engine.update(engine) 
  for (var k=0;k<divisions.length; k++){
    divisions[k].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  if (frameCount%60===0){
    particles.push(new particle(random(width/2-30,width/2+30),10,10));
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  if (particles=null){
    particles.display();

    if (particles.body.position.y>760){
      if (particles.body.position.x<300){
        score=score+500;
        particles=null;
      }
    }
    if (particles.body.position.y>760){
      if (particles.body.position.x<301 && particles.body.position>600){
        score=score+100;
        particles=null;
      }
    }
    if (particles.body.position.y>760){
      if (particles.body.position.x<601 && particles.body.position>900){
        score=score+200;
        particles=null;
      }
    }
    
  }
  
  ground1.display();
  
  
  
}
function mousePressed(){
  if (gamestate==0){
    particles=new particle(mouseX,10);
  }
}