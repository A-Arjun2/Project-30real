const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
       createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  Engine.run(engine)
  
  ground = new Ground(600,height,1200,20);
  ground1 = new Ground(390,300,300,10);
  ground2 = new Ground(780,205,200,10);
  

   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40); 
   block10 = new Block(390,235,30,40);
   blockll = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   block13 = new Block(360,195,30,40);
   blockl4 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   blockl6 = new Block(390,155,30,40); 
   block17 = new Block(300,274,30,40); 
   block18 = new Block(390,155,30,40); 
   block19 = new Block(330,275,30,40); 
   block20 = new Block(360,275,30,40); 
   block21 = new Block(390,275,30,40); 
   block22 = new Block(420,275,30,40); 
   block23 = new Block(450,275,30,40); 
   block24 = new Block(480,275,30,40); 


   block25 = new Block(785,101,30,40);
   block26 = new Block(815,140,30,40); 
   block27 = new Block(755,140,30,40);
   block28 = new Block(785,140,30,40);
   block29 = new Block(785,180,30,40);
   block30 = new Block(815,180,30,40);
   block31 = new Block(755,180,30,40);
   block32 = new Block(845,180,30,40);
   block33 = new Block(725,180,30,40); 

   polygon=new Polygon(150,100,40,40)

   slingshot = new SlingShot(polygon.body,{x:100, y:200});

}

function draw() {
  background("black");  

  ground.display();
  ground1.display()
  ground2.display()


  block8.display()
  block9.display()
  block10.display()
  blockll.display()
  block12.display()
  block13.display()
  blockl4.display()
  block15.display()
  blockl6.display()
  block17.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  block29.display()
  block30.display()
  block31.display()
  block32.display()
  block33.display()
  
  polygon.display()

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode===32){
slingshot.attach(polygon.body)

  }
}