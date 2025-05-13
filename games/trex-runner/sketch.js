let trex ,trex_running, edges;
let cactusGroup;
let cloudsGroup;
let trexOW;
let gameOver;
let gameState;
let score;
let restart;

function preload(){
  scoreimg = loadImage("score.png")
  treximg = loadAnimation("trex1.png", "trex3.png", "trex4.png") 
  floor = loadImage("ground2.png")
  cloudImg = loadImage("cloud.png")
  cactus1 = loadImage("obstacle1.png")
  cactus2 = loadImage("obstacle2.png")
  cactus3 = loadImage("obstacle3.png")
  cactus4 = loadImage("obstacle4.png")
  restartImg = loadImage("restartBtn.png")
  cactus5 = loadImage("obstacle5.png")
  cactus6 = loadImage("obstacle6.png")
  gameOverImg = loadImage("gameOver.png")
  trexOW = loadAnimation("trex_collided.png")
  jumpSFX = loadSound("jump.mp3")
}

function setup(){
  gameState = "start";
  createCanvas(1000,600)
  cactusGroup = createGroup();
  cloudsGroup = createGroup();
  gameOver = createSprite(500, 300);
  gameOver.visible = false;
  gameOver.addImage(gameOverImg)
  score = 0;

  //create restart btn
  restart = createSprite(500, 500)
  restart.scale = 0.5;
  restart.addAnimation("button", restartImg)
  restart.visible = false;
  
  //create a trex sprite
  trex = createSprite(60, 550, 30, 30)
  trex.addAnimation("running", treximg)
  trex.addAnimation("collided", trexOW)
  trex.setCollider("circle", -5, -8, 45)
  //create ground sprite
  ground = createSprite(700, 570, 5000, 30)
  ground.addImage(floor)
  trex.scale = 0.83
  actualground = createSprite(700, 590, 5000, 30)
  actualground.visible = false;
}


function draw() {
  background("darkgrey")
  drawSprites();
  if (gameState == "over") {
    ground.velocityX = 0;
    trex.velocityX = 0;
    trex.velocityY = 0;
    cactusGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    cloud.velocityX = 0;
    if (mousePressedOver(restart)) {
      reset()
    }
  }
  fill("white")
  textSize(17)
  textFont("Verdana")
  image(scoreimg, 800, 20, 100, 50)
  text(score, 915, 50)
  if (gameState == "start") {
  score = score + Math.round(getFrameRate()/60)
    spawnClouds();
  spawnCacti();
    trex.changeAnimation("running", treximg)
    trex.velocityY += 0.7;
    ground.velocityX = -(4+1*score/100)
    if (keyDown("space") && trex.collide(actualground)) {
      trex.velocityY = -14.5;
      jumpSFX.play();
    }
      if (ground.x < 0) {
      ground.x = ground.width / 2;
      }
    if (trex.isTouching(cactusGroup)) {
        gameOver.visible = true;
        restart.visible = true;
        trex.changeAnimation("collided", trexOW)
        gameState = "over";
      }
  }
  

  trex.collide(actualground)
}
function spawnClouds() {
  if (frameCount % 80 === 0) {
    cloud = createSprite(1000, 100, 40, 25);
    cloud.addImage(cloudImg)
    cloud.velocityX = -2 + -0.5;
    cloud.y = Math.round(random(40, 100))
    cloud.scale = 0.7
    trex.depth = cloud.depth + 1;
    cloud.lifetime = 500;
    cloudsGroup.add(cloud);
  }
}
function spawnCacti() {
  if (frameCount % 80 === 0) {
    var num = Math.round(random(1,6))
    var cacti = createSprite(1000, 540, 40, 25);
    cacti.velocityX = -(4+1*score/100)
    cacti.scale = 0.7
    cacti.lifetime = 500;
    trex.depth = cacti.depth + 1;
    switch(num) {
      case 1: cacti.addImage(cactus1);
      break;
      case 2: cacti.addImage(cactus2);
      break;
      case 3: cacti.addImage(cactus3);
      break;
      case 4: cacti.addImage(cactus4);
      break;
      case 5: cacti.addImage(cactus5);
      break;
      case 6: cacti.addImage(cactus6);
      break;
      default: break;
    }
    cactusGroup.add(cacti);
  }
}

function reset() {
  score = 0;
  gameState = "start"
  cloudsGroup.destroyEach()
  cactusGroup.destroyEach()
  //trex.destroy();
  //ground.destroy();
  restart.visible = false;
  gameOver.visible = false;
  //setup();
}
