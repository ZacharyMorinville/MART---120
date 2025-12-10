var x = 100;
var y = 100;
function setup()
{
    createCanvas(800, 700);
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
    rect(350,320,50,8)
    rect(440,320,50,8)
    //eye whites
    fill(255,255,255)
    rect(355,340,43,20)
    rect(442,340,43,20)
    triangle(355,360,397,365,399,360)
    triangle(441,360,443,365,483,360)
    //irises
    fill(0,153,153)
    ellipse(380,350,25)
    ellipse(460,350,25)
    //pupils and around eyes
    fill(0,0,0)
    strokeWeight(10)
    stroke(0,0,0)
    point(380,350)
    point(460,350)
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
    rect(390,425,60,3)
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
    textSize(50)
    text('Mii in Code',305,100)
    textSize(20)
    text('Zachary M',666,666)
     text('(I look like a Mii)',345,150)
}