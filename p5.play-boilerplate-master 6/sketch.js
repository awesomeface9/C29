const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground, base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25,box26;
var polygon,slingShot;
var engine, world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box8 = new Box(330,235,30,40);
  box9 =new Box(360,235,30,40);
  box10= new Box(390,235.30,40);
  box11= new Box(420,235.30,40);
  box12= new Box(450,235,30,40);
  box13= new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,20,40);
  polygon= Bodies.circle(50,200,20);
  World.add(world,this.polygon);
  slingShot= new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  
  //box1.display();
  //box2.display();
 // box3.display();
  //box4.display();
  //box5.display();
  //box6.display();
  //box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  //box17.display();
  //box18.display();
  //box19.display();
  //box20.display();
  //box21.display();
  //box22.display();
  //box23.display();
  //box24.display();
  //box25.display();
  //box26.display();
  polygon.display();
  slingShot.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
  if(gameState!=="launched")
  {
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

  }
 
}


function mouseReleased(){
  SlingShot.fly();
  gameState="launched";
}