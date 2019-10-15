const needs= document.getElementById('needs')
var myElement = document.getElementById('plant_img'),
    imgList = [
  "/img/semilla0.gif", 
  "/img/semilla1.gif",
  "/img/semilla2.gif",
  "/img/semilla3.gif",
  "/img/semilla4.gif",
];

let counter=1;

needs.addEventListener('click', evento =>{
    
    myElement.style.backgroundImage = "url('" + imgList[counter++] + "')";

    if(counter==5){
        counter=0;
    };
    
});