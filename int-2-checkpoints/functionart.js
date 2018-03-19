/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(800, 800);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

qwerty = function(x,y){
    fill(random(255),random(255),random(255));
    //letter O outside
    ellipse(x,y,25,30);
    ellipse(x-30,y,25,30);
    //letter F
    beginShape();
    vertex(x+17.5,y+15);
    vertex(x+17.5,y-15);
    vertex(x+40.5,y-15);
    vertex(x+40.5,y-8);
    vertex(x+24.5,y-8);
    vertex(x+24.5,y-3);
    vertex(x+40.5,y-3);
    vertex(x+40.5,y+4);
    vertex(x+24.5,y+4);
    vertex(x+24.5,y+15);
    vertex(x+17.5,y+15);
    endShape();
    //letter O inside
    fill(255);
    ellipse(x,y,10,15);
    ellipse(x-30,y,10,15);  
};

mouseClicked = function(){
    qwerty (mouseX,mouseY);
};

draw = function() {
    
};    

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

