var newx=50
var platformGroup

function preload(){
  groundImg=loadImage("image/ground.jpg")
  lavaImg=loadImage("image/lava.png")
  treeImg=loadImage("image/birch.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  platformGroup=new Group()

  for(var i=0;i<30;i++){
  platform1=new Platform(newx)
  platformGroup.add(platform1.body)
  newx+=200
  }

  lavaPit1=new Lava(3000)
  lavaPit2=new Lava(3200)

  tree1=new Tree(1000)
  player=new Player()
}

function draw() {
  background(0); 

  player.applyGravity()

  player.spt.collide(platformGroup)
  player.spt.collide(tree1.body)
  player.spt.collide(tree1.body2)

  camera.position.x=player.spt.x+400

  if(keyDown("right")){
    player.moveRight()
  }  

  if(keyDown("left")){
    player.moveLeft()
  }  

  if(keyDown("space")&&player.spt.velocityY===0){
    player.jump()
  }  

  drawSprites();
}