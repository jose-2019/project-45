
var girl,girlImg;
var bananaImg,broccolieImg,burgerImg,cokeImg,donutImg,eggImg,fishImg,FriesImg;
var goodFood,badFoodGroup;
var goodFoodGroup;
var badsFood;
var score=0;

function preload(){

girlImg=loadImage("girl.png");
bananaImg=loadImage("banana.png");
broccolieImg=loadImage("broccolie.png");
burgerImg=loadImage("burger.jpg");
cokeImg=loadImage("coke.png");
donutImg=loadImage("donut.png");
eggImg=loadImage("egg.png");
fishImg=loadImage("fish.png");
FriesImg=loadImage("french fries.jpg");

}

function setup(){

girl=createSprite(200,100,50,50);
girl.addImage(girlImg);
girl.scale=0.2;
  
goodFoodGroup =new Group();
badsFood =new Group();


score=0;

}

function draw() {
  
createCanvas(1000,1000);

  background("white");
  
  if(keyDown(RIGHT_ARROW)){

	girl.velocityX=3;

}
 
   if(keyDown(LEFT_ARROW)){

	girl.velocityX=-3;

}



    var x=Math.round(random(1,4));
    if(frameCount%130==0)
    {
      goodFood = createSprite(random(60,380),330,15,15);
      goodFood.velocityY=-3;
        currentFrame=frameCount;
        switch(x)
        {
            case 1: goodFood.addImage(bananaImg);
            goodFood.scale=0.1;
                    break;
            case 2: goodFood.addImage(broccolieImg);
                goodFood.scale=0.1;
                    break;
            case 3: goodFood.addImage(eggImg);
                goodFood.scale=0.3;
                    break;      
			case 4: goodFood.addImage(broccolieImg);
                goodFood.scale=0.3;
                    break;
            
goodFood.add(goodFoodGroup);
            
            
        }  
    }
  
 var x=Math.round(random(1,4));
    if(frameCount%70==0)
    {
      badFoodGroupGroupGroup = createSprite(random(60,380),330,50,50);
      badFoodGroupGroupGroup.velocityY=-3;
        currentFrame=frameCount;
        switch(x)
        {
            case 1: badFoodGroupGroupGroup.addImage(burgerImg);
                badFoodGroupGroupGroup.scale=0.1
                    break;
            case 2: badFoodGroupGroupGroup.addImage(FriesImg);
                badFoodGroupGroupGroup.scale=0.2
                    break;
            case 3: badFoodGroupGroupGroup.addImage(cokeImg);
                badFoodGroupGroupGroup.scale=0.1;
                    break;
            case 4: badFoodGroupGroupGroup.addImage(donutImg);
                badFoodGroupGroupGroup.scale=0.3
                    break;
                    
               badsFood.add(badFoodGroupGroupGroup);
                         
                    
        }  
    }
  
if(goodFoodGroup.isTouching(girl)){
	goodFoodGroup.destroyEach();
  score=score+5;
  
}

if(badsFood.isTouching(girl)){
  
goodFoodGroup.destroyEach();
badsFood.destroyEach();
badsFodd.setVelocityYEach(0);
goodFoodGroup.setVelocityYEach(0);
textSize(40);
fill("yellow");
text("GAME OVER",200,200)
  
}

  
  drawSprites();
  textSize(30)
  fill("red");
  text("score:"+score,872,68);
  
}
