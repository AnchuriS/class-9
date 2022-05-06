var sprite;
function setup() {
  createCanvas(400,400);
  sprite=createSprite(180,180,40,40);
}

function draw() 
{
 
  background(30);
  if(keyDown("down")){
    sprite.y+=5;
  }
  if(keyDown("up")){
    sprite.y-=5;
  }
  if(keyDown("left")){
    sprite.x-=5;
  }
  if(keyDown("right")){
    sprite.x+=5;
  }
  drawSprites();

}




