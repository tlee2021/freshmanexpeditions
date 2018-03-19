//saves DOM elements to variables
var changebg = document.getElementById("changebg");
var changebgbutton = document.getElementById("changebgbutton");

//sets user input as background color
changebgbutton.addEventListener("click", function(){
    document.body.style.backgroundColor = changebg.value;
})