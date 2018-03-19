/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(800,800);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var yPos = 0;
var skycolor = 255;
var skycolor2 = 255;

starz = function(x,y){
     if (skycolor<75){
        fill(255,255,0);
        noStroke();
    } else {
        noFill();
        noStroke();
    }
    beginShape();
    vertex(x,y-9);
    vertex(x+3,y-3);
    vertex(x+9,y);
    vertex(x+3,y+3);
    vertex(x,y+9);
    vertex(x-3,y+3);
    vertex(x-9,y);
    vertex(x-3,y-3);
    vertex(x,y-9);
    endShape();
};

mouseClicked = function(){
    starz(mouseX, mouseY);
};

draw = function(){
    //sky
    background(0, skycolor, skycolor2);
   
    //ground
    fill(204);
    noStroke();
    rect(0,yPos + 600,800,200);
    
    //launch pad
    fill(128);
    stroke(0)
    rect(200,yPos + 550,400,200);
    
    //clouds
    fill(255);
    noStroke();
    arc (50,yPos+200,50,50, PI, TWO_PI);
    arc (125,yPos+200,50,50, PI, TWO_PI);
    arc (100,yPos+200,50,50, PI, TWO_PI);
    ellipse(75,yPos+175,50,50);
    ellipse(105,yPos+170,50,50);
    
    arc (250,yPos+150,50,50, PI, TWO_PI);
    arc (325,yPos+150,50,50, PI, TWO_PI);
    arc (300,yPos+150,50,50, PI, TWO_PI);
    ellipse(305,yPos+125,50,50);
    ellipse(275,yPos+120,50,50);
    
    arc (500,yPos+200,50,50, PI, TWO_PI);
    arc (575,yPos+200,50,50, PI, TWO_PI);
    arc (550,yPos+200,50,50, PI, TWO_PI);
    ellipse(555,yPos+175,50,50);
    ellipse(525,yPos+170,50,50);
    
    //rocket first stage
    fill(255);
    stroke(0);
    strokeWeight(2);
    beginShape();
    vertex(350,650);
    vertex(350,400);
    vertex(370,380);
    vertex(430,380);
    vertex(450,400);
    vertex(450,650);
    vertex(350,650);
    endShape();
    
    //rocket second stage
    fill(255);
    beginShape();
    vertex(370,380);
    vertex(370,230);
    vertex(380,220);
    vertex(420,220);
    vertex(430,230);
    vertex(430,380);
    vertex(370,380);
    endShape();
    
    //rocket third stage
    fill(255);
    beginShape();
    vertex(380,220);
    vertex(380,160);
    vertex(390,150);
    vertex(410,150);
    vertex(420,160);
    vertex(420,220);
    vertex(380,220);
    endShape();
    
    //rocket top
    fill(77);
    beginShape();
    vertex(390,150);
    vertex(395,145);
    vertex(400,145);
    vertex(400,105);
    vertex(400,145);
    vertex(405,145);
    vertex(410,150);
    vertex(390,150);
    endShape();
    
    //rocket left thruster
    fill(77);
    beginShape();
    vertex(365,650);
    vertex(385,650);
    vertex(395,670);
    vertex(355,670);
    vertex(365,650);
    endShape();
    
    //rocket right thruster
    fill(77);
    beginShape();
    vertex(415,650);
    vertex(435,650);
    vertex(445,670);
    vertex(405,670);
    vertex(415,650);
    endShape();
    
    //rocket thruster flames
    fill(255, random(64,255), 0);
    stroke(255, random(64,255), 0);
    triangle (367, 670, random(369,375), random(688,690), random(359,365), random(688,690))
    fill(255, random(64,255), 0);
    stroke(255, random(64,255), 0);
    triangle (382, 670, random(385,391), random(688,690), random(375,381), random(688,690))
    fill(255, random(64,255), 0);
    stroke(255, random(64,255), 0);
    triangle (417, 670, random(419,425), random(688,690), random(409,415), random(688,690))
    fill(255, random(64,255), 0);
    stroke(255, random(64,255), 0);
    triangle (432, 670, random(435,441), random(688,690), random(425,431), random(688,690))
    
    //makes ground and clouds lower, and sky darken
    yPos += 3;
    skycolor -= 0.5;
    skycolor2 -= 0.2;
    
    //stars and moon appear at a certain point
    if (skycolor<75){
        fill(255);
        stroke(255);
    } else {
        noFill();
        noStroke();
    }
    //stars
     for(var i=45; i<width; i+=100){
        for(var j=60; j<width; j+=200){
            var ellipsesize = 1;
            ellipse(i, j, ellipsesize, ellipsesize);
    }}

    for(var k=100; k<width; k+=100){
        for(var l=160; l<width; l+=200){
            var ellipsesize2 = 1;
            ellipse(k, l,ellipsesize2,ellipsesize2);
    }}
   
   //moon
   ellipse(695,140,50,50);
   fill(0, skycolor, skycolor2);
   stroke(0, skycolor, skycolor2);
   ellipse(705,140,50,50);
};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch)