
var monkeyImage;
var monkey;
var bananaImage;
var obstacleImage;
var bananaImage;
var score = 0;
var obstacleImage;
var ground;
var obstacleGroup;
var foodGroup;
var invisibleground;
function preload(){
  
  
monkeyImage =     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() { 
  createCanvas(600,600);
monkey = createSprite(80,350,10,10);
monkey.addAnimation("running",monkeyImage);
monkey.scale = 0.1; 

  //edges = createEdgeSprites();
 
ground = createSprite(400,380,900,10);
 obstacleGroup = new Group();
  foodGroup = new Group();
 
}


function draw() {

 background("white");
  
   ground.velocityX = -4;
  ground.x = ground.width/2;
   if(ground.x>600){
  ground.x = 300;   
 }
 

  if(keyDown("space")){
   monkey.velocityY = -11; 
     
  }
    monkey.velocityY = monkey.velocityY+0.5;

  score = score+Math.round(getFrameRate()/60);
  textSize(15);
  stroke("black");
    fill("red");
    text('SurvivalTime:'+score,450,40); 
  monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)){
    
  }
  
  spawnobstacle();
  spawnfood();
  drawSprites();
}


function spawnobstacle(){
  if(frameCount%200===0){
 var ob = createSprite(500,340,10,10); 
 ob.addImage(obstacleImage) ;
  ob.scale = 0.2;
  ob.velocityX = -(4+score/2000);
    var ran = Math.round(random(1,6));
    obstacleGroup.add(ob);
  }
  
}

function spawnfood(){
  if(frameCount%200===0){
    var food = createSprite(500,230,10,10);
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -(4+score/2000);
    var ran = Math.round(random(1,6));
    foodGroup.add(food);
  }
}




