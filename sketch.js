var newx=50

function preload(){
  groundImg=loadImage("image/ground.jpg")
  lavaImg=loadImage("image/lava.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  for(var i=0;i<30;i++){
  platform1=new Platform(newx)
  newx+=200
  }
  lavaPit1=new Lava(400)
  lavaPit2=new Lava(600)
}

function draw() {
  background(0);  
  drawSprites();
}