//Global Variables
var bananaImage;
var obstacleImage;
var obstacleGroup;
var background;
var score ;
var monkey;
var ground;




function preload(){
  monkey=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  background=loadImage("jungle.png");
  bananaImgae = loadImage("Banana.png");
  obstacleImage = loadImgae("stone.png");
  
  
}


function setup() {
  createCanvas(600,300);
  background=createSprite=(400200,10,10);
  background.velocityX=1;
  ground.visible=false;
  monkey.addAnimation("monkey",Monkey_01.png);
  
}


function draw(){
 background(255);
  
  switch(score){
    case 10: monkey.scale = 0.12;
      break;
      
      case 20:monkey.scale=0.14;
      break;
      
      case 30:monkey.scale=0.16;
      break;
      
      case 40:monkey.sacle=0.18;
      break;
      
      default:break;
      
  }
  if(obstacleGroup.istouching(monkey)){
    monkey.scale=0.2;
  }
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+score,500,500);
  
}