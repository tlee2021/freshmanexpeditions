/* global draw ellipse rect p p(ocessing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    background(200);
    
    for(var i=10; i<width; i+=20){
        for(var j=10; j<width; j+=40){
            var ellipsesize = 20
            ellipse(i, j, ellipsesize, ellipsesize);
    }}

    for(var k=20; k<width; k+=20){
        for(var l=30; l<width; l+=40){
            var ellipsesize2 = 20
            ellipse(k, l,ellipsesize2,ellipsesize2);
    }}

    if(mouseX<30&&mouseY>370){
        fill(random(255),random(255),random(255));
        stroke(random(255),random(255),random(255));
    }
    else{
        fill(200);
        stroke(200);
    }
    
};    

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

