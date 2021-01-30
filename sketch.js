var balloon, balloonImage;
var backgroundImage;
var database,position;

function preload(){
backgroundImage = loadImage("Background.png");
balloonImage = loadAnimation("Balloon1.png","Balloon2.png","Balloon3.png");

}


function setup() {
  createCanvas(1600,700);
  balloon = createSprite(200, 500, 50, 50);
  balloon.addAnimation("animations",balloonImage);
  balloon.scale = 0.8;

 
}


function draw() {
  background(backgroundImage); 
  textSize(30) 
  fill("purple");
  text("Use Arrow keys to move the Hot Air Balloon !!!",830,50)
  if(keyDown(LEFT_ARROW)){
   balloon.x = balloon.x - 10;
   
  }
  else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
   balloon.y = balloon.y - 10;
   balloon.scale = balloon.scale - 0.015;       
  }
  else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y + 10
  balloon.scale = balloon.scale + 0.015;       
  }
  
  

  drawSprites();
}

function readPosition(data){
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
  }
  
  function showError(){
    console.log("Error in writing to the database");
  }

  function updateHeight(x,y){
    database.ref('balloon/height').set({
      'x' : height.x + x,
      'y' : height.y + y
    })
  }

  function readHeight(data){
    height = data.val();
    balloon.x = height.x;
    balloon.y = height.y
  }