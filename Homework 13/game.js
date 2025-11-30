//character variables
var characterX = 100;
var characterY = 100;
//keys
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

/*
//obstacle shape 1
var shapeX = 200;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
//obstacle shape 2
var shape2X = 10;
var shape2XSpeed = 5;
*/

//Mouse click obstacle
var mouseShapeX;
var mouseShapeY;

//Add Arrays

//Array x and y and diameter
var shapeXs = [];
var shapeYs = [];
var diameters = [];
//Array shape speed
var shapeXspeeds = [];
var shapeYspeeds = [];

function setup()
{
    createCanvas(600, 600);
   /* shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2XSpeed = floor(random()*10+1)
    */
   for (var i = 0; i < 140; i++) {
    shapeXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = getRandomNumber(500);
    shapeYs[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(30);
   }
     CreateCharacter(100,50);
}

function draw()
{
  //bg and detail
    background(200,100,5);
    stroke(0);
    fill(0);
  
   //Boundaries
   CreateBoundary(10);
  
   //escape text
   Exit();
  
   //character
   DrawChar();

   //character controls
   CharControls();

   /*
    //obstacle shapes
    Obstacles();
    Ob1Move();
    Ob2Move();
   */

    //Array Enemies
    fill(160, 80, 20);
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
        //Array speeds
        shapeXs[i] += shapeXspeeds[i];
        shapeYs[i] += shapeYspeeds[i];
        //Array bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }


    //winning
   Success();

    //Mouse Shape
   MouseShape();
}

//Mouse shape 
function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
function MouseShape ()
{
     //Mouse Shape
    fill(200,70,30);
    circle(mouseShapeX,mouseShapeY,40);
}


    //boundary
function CreateBoundary(thickness)
{
    rect(0,0,width,thickness);
   rect(0,0,thickness,height);
   rect(0,height-thickness,width,thickness);
   rect(width-thickness,0,thickness,height-300);
   rect(width-thickness,400,thickness,200);
}


     //character
function CreateCharacter(x,y)
{
//character
characterX = x;
characterY = y;
}
function DrawChar()
{
     fill(161,75,0)
    circle(characterX,characterY,20)
}


     //controls
function CharControls()
{
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
}
/*
//obstace Shapes
function Obstacles()
{
     //obstacle shape 1
    fill(200,0,0);
    rect(shapeX,shapeY,60,40);

   //obstacle shape 2
    fill(200,200,50);
    rect(shape2X,250,120,50);
}
function Ob1Move()
{
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
}
function Ob2Move()
{
 //Shape Nyrooommm 2
    shape2X+=shape2XSpeed;
   if(shape2X >= 460 || shape2X <= 10)
    {
        shape2XSpeed *=-1;
    }
}
*/
//Exit
function Exit ()
{
//text
  textSize(20)
  fill(0)
  text("Escape",525,370)
}

//Winning
function Success()
{
     if(characterX>590 && characterY>300 && characterY<400)
    {
         fill(0);
        stroke(5);
        textSize(26);
        text("Success!", width/2-50, height/2-50);
    }
}

//random Number
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
