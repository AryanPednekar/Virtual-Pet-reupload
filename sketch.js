//Create variables here

var happyDog;
var dog;

var dog1;
var database, foodS, foodStock;
function preload()
{
 
  happyDog=loadImage("happydog .png")
  dog=loadImage("dogImg1.png")
  

}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  dog1=createSprite(250,250,50,50);
 dog1.addImage(dog);
 dog1.scale=0.25;
 foodS=20;
 

}


function draw() {  
background(46,139,87);
  if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog1.addImage(happyDog);
}

  drawSprites();
   /* noStroke();
        textSize(35)*/
        fill("white")
        text("Food Remaining:" +foodS, width-300, 150)
        
  //ad fill("black")d styles here

}
function readStock(data){
  foodS=data.val();
  Food=foodStock;
}

function writeStock(x){
 if(x<=0){
  x=0
 }else{
   x=x-1;
 }
 
 
  database.ref('/').update({
   Food:x
 })
}


