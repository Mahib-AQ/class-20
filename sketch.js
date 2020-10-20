var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(300,200,50,80);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(300,200,80,50);
  fixedRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x-movingRect.x < (movingRect.width/2)+(fixedRect.width/2)
  && movingRect.x-fixedRect.x < (movingRect.width/2)+(fixedRect.width/2)
  && fixedRect.y-movingRect.y < (movingRect.height/2)+(fixedRect.height/2)
  && movingRect.y-fixedRect.y < (movingRect.height/2)+(fixedRect.height/2)
  ){

      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";

    }else{

      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }

  drawSprites();
}