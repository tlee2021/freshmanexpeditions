/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(500, 500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos1 = 0;
var yPos1 = 0;
var Color1 = 1;

var xPos2 = 500;
var yPos2 = 215;
var Color2 = 150;

var xPos3 = 0;
var yPos3 = 200;
var Color3 = 104;

var circleDiameter = 1;

draw = function() {
    
    //draws black circles in center that increase diameter by a factor of 1.25
    strokeWeight(2);   
    stroke(0, 0, 0);
    fill(0,0,);
    ellipse(250, 250, circleDiameter, circleDiameter);
    circleDiameter = circleDiameter * 1.25;

    //draws circles that shift from green to orange from upper left to middle right
    strokeWeight(1);   
    stroke(0, 33, 142);
    fill(Color1, 199, 104);
    ellipse(xPos1, yPos1, 20, 20);
    xPos1 = xPos1 + 22.5;
    yPos1 = yPos1 + 10;
    Color1 = Color1 + 12;
    
    //draws circles that shift from orange to pinkish from middle right to middle left
    strokeWeight(1);   
    stroke(0, 33, 142);
    fill(249, Color2, 104);
    ellipse(xPos2, yPos2 + 35,20, 20);
    xPos2 = xPos2 - 30;
    Color2 = Color2 - 10;
    
//draws circles that shift from pinkish to purple from middle left to lower right
    strokeWeight(1);   
    stroke(0, 33, 142);
    fill(249, 1, Color3);
    ellipse(xPos3, yPos3 + 70, 20, 20);
    xPos3 = xPos3 + 22.5;
    yPos3 = yPos3 + 10;
    Color3 = Color3 + 7;
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
