var bg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    //bg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    cat = createSprite(450,400);
    cat.addAnimation("sitting",catImg1);
    
    mouse = createSprite(250,400);
    mouse.addAnimation("standing",mouseImg1);

}

function draw() {

    background("yellow");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < mouse.width/2 + cat.width/2 
      && mouse.x-cat.x < mouse.width/2 + cat.width/2){
        mouse.changeAnimation("mouse_happy",mouseImg3);
        cat.changeAnimation("cat_happy",catImg3);
    }

    
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
      mouse.changeAnimation("teasing",mouseImg2);

      cat.velocityX = -2;
      cat.changeAnimation("running",catImg2);
    }
  


}
