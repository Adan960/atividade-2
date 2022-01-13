var corredor,fundo;
var corredor_img,fundo_img;

function preload(){
  //imagens pré-carregadas

  corredor_img = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png");

  fundo_img = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  background("black");

  //mover fundo
  fundo = createSprite(200,400);
  fundo.addImage(fundo_img);
  fundo.scale = 1.2;
 


  //corredor
  corredor = createSprite(200,360,30,30);
  corredor.addAnimation("movingCorredor",corredor_img);
  corredor.scale = 0.1;
  corredor.x = World.mouseX;
}

function draw() {
  background(0);
  fundo.velocityY = 3;
  corredor.x = World.mouseX;

  //fazer o chão infinito
  if(fundo.y > 500){

    fundo.y = 0;
  }

 


  drawSprites();
}