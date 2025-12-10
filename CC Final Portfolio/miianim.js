var x = 100;
var y = 100;

var eye1X = 380;
var eye1Y = 350;
var eye1Direction = 1;

var eye2X = 460;
var eye2Y = 350;
var eye2Direction = 1;

var brow1X = 350;
var brow1Y = 320;
var brow1Direction = 1;

var brow2X = 440;
var brow2Y = 320;
var brow2Direction = 1;

var mouthX = 390;
var mouthY = 425;
var mouthDirection = 1;

var size = 50;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(800, 700);
    eye1Direction = floor(random()*10)
    eye2Direction = floor(random()*10)
    brow1Direction = floor(random()*10)
    brow2Direction = floor(random()*10)
}

function draw()
{
    background(200,100,5);
    textSize(15);
    text("X: " + mouseX,20,200 );
    text("Y: " + mouseY,20,220 );
    //back hair
    fill(91,68,32)
    triangle(335,391,332,417,361,412)
    triangle(505,383,515,415,490,407)
    //neck
    fill(240,190,125)
    triangle(355,420,420,585,490,422)
    triangle(375,456,283,490,420,585)
    triangle(467,456,563,490,420,585)
   //head
    strokeWeight(0)
    fill(250,216,164)
    ellipse(340,366,50,60)
    ellipse(505,366,50,60)
    ellipse(423,315,200,200)
    ellipse(423,355,180,200)
    triangle(355,422,423,480,490,422)
    //eyebrows
    fill(91,68,32)
    rect(350,brow1Y,50,8)
    brow1Y+=brow1Direction;
    if(brow1Y >= 330 || brow1Y <= 310)
    {
        brow1Direction *=-1;
    }
    rect(440,brow2Y,50,8)
    brow2Y+=brow2Direction;
    if(brow2Y >= 330 || brow2Y <= 310)
    {
        brow2Direction *=-1;
    }
    //eye whites
    fill(255,255,255)
    rect(355,340,43,20)
    rect(442,340,43,20)
    triangle(355,360,397,365,399,360)
    triangle(441,360,443,365,483,360)
    //irises
    fill(0,153,153)
    ellipse(eye1X,350,25)
    eye1X+=eye1Direction;
    if(eye1X >= 390 || eye1X <= 370)
    {
        eye1Direction *=-1;
    }
    
    ellipse(eye2X,350,25)
    eye2X+=eye2Direction;
    if(eye2X >= 470 || eye2X <= 450)
    {
        eye2Direction *=-1;
    }

    //pupils and around eyes
    fill(0,0,0)
    strokeWeight(10)
    stroke(0,0,0)
    point(eye1X,eye1Y)
    point(eye2X,eye2Y)
    strokeWeight(0)
    fill(240,190,125)
    rect(350,335,50,5)
    rect(440,335,50,5)
    strokeWeight(3)
    stroke(240,190,125)
    line(395,365,355,360)
    line(445,365,485,360)
    //nose
    strokeWeight(0)
    fill(240,190,125)
    triangle(400,380,423,400,442,380)
    //mouth
    rect(mouthX,mouthY,60,3)
     mouthX+=mouthDirection;
     mouthY+=mouthDirection;
    if(mouthX >= 375 || mouthX <= 400)
    {
        mouthDirection *=-1;
    }
    if(mouthY >= 410 || mouthY <= 440)
    {
        mouthDirection *=-1;
    }
    //front hair
    fill(91,68,32)
    triangle(420,280,448,337,445,280)
    triangle(430,272,480,344,477,260)
    triangle(473,278,511,361,530,271)
    triangle(512,340,553,357,522,296)
    triangle(424,288,395,350,390,285)
    triangle(400,295,345,345,340,290)
    triangle(350,287,332,360,300,270)
    triangle(327,340,293,351,312,294)
    triangle(325,290,296,247,351,234)
    triangle(362,238,350,195,400,230)
    triangle(500,292,538,247,500,230)
    triangle(492,230,495,197,440,230)
    triangle(380,225,390,177,420,224)
    triangle(403,225,430,180,448,230)
    triangle(425,227,460,188,475,223)
    rect(330,215,185,80)
    //git a damn shirt on
    fill(240,190,125)
    rect(395,465,50,20)
    fill(161,75,0)
    triangle(330,470,420,545,205,515)
    triangle(508,470,420,545,632,515)
    triangle(205,515,420,635,420,545)
    triangle(632,515,420,635,420,545)
    //text
    fill(124,58,0)
    textSize(size)
    size += sizeDirection;
    count ++;
    if(count>5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Mii in Code',305,100)
    textSize(20)
    text('Zachary M',666,666)
     text('(I look like a Mii)',345,150)
}