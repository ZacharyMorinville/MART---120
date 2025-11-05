//character variables
var characterX = 100;
var characterY = 100;
//keys
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//obstacle shape 1
var shapeX = 200;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
//obstacle shape 2
var shape2X = 10;
var shape2XSpeed = 5;
//Mouse click obstacle
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2XSpeed = floor(random()*10+1)
}

function draw()
{
  //bg and detail
    background(200,100,5);
    stroke(0);
    fill(0);
   rect(0,0,width,10);
   rect(0,0,10,height);
   rect(0,height-10,width,10);
   rect(width-10,0,10,height-300);
   rect(width-10,400,10,200);
  //text
  textSize(20)
  fill(0)
  text("Escape",525,370)
  
   //character
    fill(161,75,0)
    circle(characterX,characterY,20)
    //character controls
     if(keyIsDown(w))
    {
        characterY -= 3;   
    }
     if(keyIsDown(a))
    {
        characterX -= 3;   
    }
     if(keyIsDown(s))
    {
        characterY += 3;   
    }
     if(keyIsDown(d))
    {
        characterX += 3;   
    }
    //obstacle shape 1
    fill(200,0,0);
    rect(shapeX,shapeY,60,40);
    //Shape Nyrooommm
    shapeX+=shapeXSpeed;
    shapeY+=shapeYSpeed;

     if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    } 
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    

   //obstacle shape 2
    fill(200,200,50);
    rect(shape2X,250,120,50);
    //Shape Nyrooommm
    shape2X+=shape2XSpeed;
   if(shape2X >= 460 || shape2X <= 10)
    {
        shape2XSpeed *=-1;
    }

    //winning
    if(characterX>590 && characterY>300 && characterY<400)
    {
         fill(0);
        stroke(5);
        textSize(26);
        text("Success!", width/2-50, height/2-50);
    }
    //Mouse Shape
    fill(200,70,30);
    circle(mouseShapeX,mouseShapeY,40);
}
function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }