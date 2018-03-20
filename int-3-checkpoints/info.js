var pizzaimg = document.getElementById("pizzaimg");
var sushiimg = document.getElementById("sushiimg");
var ramenimg = document.getElementById("ramenimg");
var imagedesc = document.getElementById("imagedesc");

pizzaimg.addEventListener("mouseenter", function(){
    imagedesc.innerHTML = "Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments, and can be made without cheese."
});

sushiimg.addEventListener("mouseenter", function(){
    imagedesc.innerHTML="Sushi is a Japanese dish of specially prepared vinegared rice, usually with some sugar and salt, combined with a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits."
});

ramenimg.addEventListener("mouseenter", function(){
    imagedesc.innerHTML="Ramen is a Japanese dish. It consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, dried seaweed, menma, and green onions. "
});