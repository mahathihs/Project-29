const Engine=Matter.Engine;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const World=Matter.World;
const Render=Matter.Render;

var polygonImage;
var slingshot,polygon;

function preload(){
   polygonImage=loadImage("polygon.png");
}

function setUp(){

  engine = Engine.create();
  world = engine.world;
  
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });

  ground=new Ground(1470,10,900,30);
  box=new Ground(245,500,30,50);
  //level two
  block1=new Block(330,235,30,40);
  block2=new Block(360,235,30,40);
  block4=new Block(390,235,30,40);
  block5=new Block(420,235,30,40);
  block6=new Block(450,235,30,40);
  //level three
  block7=new Block(360,195,30,40);
  block8=new Block(390,195,30,40);
  block9=new Block(420,195,30,40);
  //top
  block10=new Block(390,155,30,40);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot=new SlingShot(this.polygon,{x:100,y:200});

  Engine.run(engine);

}

function draw(){
    createCanvas(1500,1000);
    rectMode(CENTER);
    background(0);

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    ground.display();
    box.display();
    slingshot.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
}

function mouseReleased(){
  slingshot.fly();
}

function mouseDragged(){
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}