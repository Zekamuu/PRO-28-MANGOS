var tree, treeImg;
var ground;
var stone, stonImg;
var boyImage;
var slingshot;
var mango1, mango2, mango3, mango4, mango5, mangoImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boyImage = loadImage("Images/boy.png");
	mangoImage = loadImage("Images/mango.png");
	treeImg = loadImage("Images/tree.png");
	stoneImg = loadImage("Images/stone.png");
}
function setup() {

	createCanvas(800, 700);

	matterEngine = Engine.create();
	matterWorld = matterEngine.world;

	

	ground = new Grounds(400, 700, 800, 50);

	tree = new Trees(700, 450, 50, 300);

	mango1 = new Mangos(random(550, 800), random(300, 500), 25);

	mango2 = new Mangos(random(550, 800), random(300, 500), 25);

	mango3 = new Mangos(random(550, 800), random(300, 500), 25);
	
	mango4 = new Mangos(random(550, 800), random(300, 500), 25);

	mango5 = new Mangos(random(550, 800), random(300, 500), 25);
	stone = new Stones(100, 500, 50, 50);

	slingshot = new slingShot(stone.body, {x:100, y:500});
	Engine.run(matterEngine);
}

function draw() {

	rectMode(CENTER);
	background(225);

	detectCollision(stone, mango1)
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);


	image(boyImage, 150, 570, 150, 150);
	
	ground.display();
	tree.display();
	mango1.show();
	mango2.show();
	mango3.show();
	mango4.show();
	mango5.show();
	stone.display();
	slingshot.display();
}
function mouseDragged(){
	if(slingshot.sling.bodyA != null){
		Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
	}
}
function mouseReleased(){
	slingshot.fly();
}
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.width){
		Matter.Body.setStatic(lmango.body, false);
	}
}
function keyPressed(){
	if(keyCode == 32){
		slingshot.attach(stone.body);
	}
}