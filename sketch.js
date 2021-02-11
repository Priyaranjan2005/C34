const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,
box16,box17,box18,box19,box20;
var rope;

function setup(){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);

    box1 = new Box(900,500);
    box2 = new Box(950,500);
    box3 = new Box(1000,500);
    box4 = new Box(1050,500);
    box5 = new Box(1100,500);
    box6 = new Box(900,450);
    box7 = new Box(950,450);
    box8 = new Box(1000,450);
    box9 = new Box(1050,450);
    box10 = new Box(1100,450);
    box11 = new Box(900,400);
    box12 = new Box(950,400);
    box13 = new Box(1000,400);
    box14 = new Box(1050,400);
    box15 = new Box(1100,400);
    box16 = new Box(900,350);
    box17 = new Box(950,350);
    box18 = new Box(1000,350);
    box19 = new Box(1050,350);
    box20 = new Box(1100,350);

    ball = new Ball(600,300,60,60);

    rope = new Rope(ball.body,{x:750,y:200});
}

function draw(){
    background(180);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ball.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

