/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(500, 500);background(0);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    background();
    
    //upper left shape
    if (mouseX < 250 && mouseY < 250) {
        ellipse(mouseX, mouseY, 30, 30);
        fill(0,0,0);
        stroke(mouseX,mouseY,mouseX * 2);
        strokeWeight(10)
    }
    
    //upper right shape
    else if (mouseX > 250 && mouseY < 250) {
        quad (mouseX, mouseY, mouseX + 40, mouseY + 20, mouseX + 20, mouseY + 20, mouseX + 20, mouseY + 40)
        fill(0);
        stroke (255);
        strokeWeight (4);
    }
    
    
    //lower right shape
    else if(mouseX > 250 && mouseY > 250){
        rect(mouseX - 15, mouseY - 15, 30, 30);
        fill(255);
        stroke(66,224,224);
        strokeWeight(4);
    }
    
    //lower left shape
    else if (mouseX < 250 && mouseY > 250){
        triangle (mouseX,mouseY, 0, 250, 250, 500)
        fill (0);
        line (0, 500, 250, 250);
        line (mouseX, mouseY, 0, 500);
        line (mouseX, mouseY, 250, 250);
        stroke (255);
        strokeWeight (2);
        
    }
};    

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

