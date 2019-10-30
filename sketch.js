var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,50,20);
  fixedrect.shapeColor="orange";
  movingrect=createSprite(150,250,50,20);
  movingrect.shapeColor="orange";
}

function draw() {

  background("black");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
   && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
   &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
   &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="green";
}
else{
  movingrect.shapeColor="orange";
  fixedrect.shapeColor="orange";
}
  drawSprites();
}