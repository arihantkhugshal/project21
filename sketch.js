var bullet, wall;
var thickness; 
var speed;
var weight;
var damage;

function setup() {

  createCanvas(1600,400);

  speed = random(220,320);
  weight = random(30,52);
  thickness = random(22,83);

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

  bullet = createSprite(100, 200, 30, 30);
  bullet.velocityX = speed;

  wall = createSprite(1400, 200, thickness, height/2);

}

function draw() {

  background("cyan");  
  drawSprites();

  isTouching(bullet, wall);
}

function isTouching(obc1, obc2){

  if(obc1.x - obc2.x <= obc2.width / 2 + obc1.width / 2 && obc2.x - obc1.x <= obc1.width / 2 + obc2.width / 2 && damage > 10){
      obc2.velocityX = 0;
      obc2.shapeColor = "red";
    }
    else if(obc1.x - obc2.x <= obc2.width / 2 + obc1.width / 2 && obc2.x - obc1.x <= obc1.width / 2 + obc2.width / 2 && damage < 180
      && damage < 10){
      obc2.velocityX = 0;
      obc2.shapeColor = "green";
    }

}
var bullet, wall;
var thickness; 
var speed;
var weight;
var damage;

function setup() {

  createCanvas(1600,400);

  speed = random(220,320);
  weight = random(30,52);
  thickness = random(22,83);

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

  bullet = createSprite(100, 200, 30, 30);
  bullet.velocityX = speed;

  wall = createSprite(1400, 200, thickness, height/2);

}

function draw() {

  background("cyan");  
  drawSprites();

  isTouching(bullet, wall);
}

function isTouching(obc1, obc2){

  if(obc1.x - obc2.x <= obc2.width / 2 + obc1.width / 2 && obc2.x - obc1.x <= obc1.width / 2 + obc2.width / 2 && damage > 10){
      obc2.velocityX = 0;
      obc2.shapeColor = "red";
    }
    else if(obc1.x - obc2.x <= obc2.width / 2 + obc1.width / 2 && obc2.x - obc1.x <= obc1.width / 2 + obc2.width / 2 && damage < 180
      && damage < 10){
      obc2.velocityX = 0;
      obc2.shapeColor = "green";
    }

}
