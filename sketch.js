var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "green"

  movingrect = createSprite(700,200,100,50);
  movingrect.shapeColor = "green"
  movingrect.velocityX = -2
}

function draw() {
  background(0);
  //movingrect.x = World.mouseX
  //movingrect.y = World.mouseY

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && 
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){

   // movingrect.shapeColor = "red"
    //fixedrect.shapeColor = "red"
    movingrect.velocityX = movingrect.velocityX * (-1)
    movingrect.velocityY = movingrect.velocityY * (-1)  
  }
  else{
    //movingrect.shapeColor = "green"
    //fixedrect.shapeColor = "green"
  }

  drawSprites();
}