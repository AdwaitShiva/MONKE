
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground ,invisibleGround
var survivalTime
function preload(){
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImg= loadImage("yey.jpg")
}



function setup() {
createCanvas(600,400)
monkey= createSprite(85,335,20,20)
monkey.addAnimation("running", monkey_running)
monkey.scale=0.1
  
ground= createSprite(200,380,1200,10)
ground.velocityX=-4
  ground.x= ground.width/2
invisibleGround = createSprite(200,380,400,10);
invisibleGround.visible = false;
  
  

FoodGroup= new Group()
obstacleGroup= new Group()
  
var survivalTime=0;
}


function draw() {
background(backgroundImg)
if (keyDown("space")&& monkey.y >=300) {
  monkey.velocityY= -12
  }
if (ground.x < 0){
      ground.x = ground.width/2;
    }
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(invisibleGround)
food()
rocky()
  
if (FoodGroup.isTouching(monkey)){
FoodGroup.destroyEach()
monkey.scale=monkey.scale+0.2
}
if (obstacleGroup.isTouching(monkey)){
obstacleGroup.destroyEach()
monkey.scale=monkey.scale-0.2
}
survivalTime=Math.ceil(frameCount/30)
fill("orange")
textSize(20)
text("Survival Time: "+ survivalTime, 250, 50)
drawSprites()
}

function food(){
    if (frameCount % 90 === 0) {
    var food2 = createSprite(600,120,40,10);
    food2.y = Math.round(random(230,330));
    food2.addImage(bananaImage);
    food2.scale = 0.1;
    food2.velocityX = -3;
    
     //assign lifetime to the variable
    food2.lifetime = 450;
    
    //adjust the depth
    food2.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(food2);
  
  
  
    }
  
}

function rocky(){
     if (frameCount % 40 === 0) {
    var obs = createSprite(600,120,40,10);
    obs.y = Math.round(random(200,330));
    obs.addImage(obstacleImage);
    obs.scale = 0.2;
    obs.velocityX = -3;
    
     //assign lifetime to the variable
    obs.lifetime = 450;
    
    //add each cloud to the group
    obstacleGroup.add(obs);
  
  
  
    }
}



