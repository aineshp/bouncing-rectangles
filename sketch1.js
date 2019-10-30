var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,50,20);
  fixedrect.shapeColor="orange";
  movingrect=createSprite(400,100,50,20);
  movingrect.shapeColor="orange";
  movingrect.velocityY=1;
  fixedrect.velocityY=-1;
}

function draw() {

  background("black");  

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
   && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
   movingrect.velocityX=movingrect.velocityX*(-1);
   fixedrect.velocityX=fixedrect.velocityX*(-1);       

   }
   if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
   &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
   movingrect.velocityY=movingrect.velocityY*(-1);
   fixedrect.velocityY=fixedrect.velocityY*(-1);

   }
   
  drawSprites();
}