// document.querySelector("button").addEventListener("click",handleLink);  
// // no parenthesis while using the function in addEventListener bcz  it will be compiled while refreshing the web page not on click



// function handleLink(){
//     alert("I got clicked");
// }


                     // one another way of doing this using anonymus function
// document.querySelectorAll("button").addEventListener("click",function(){
//     alert("I got clicked");
// });

//Detecting button Press

for (var i=0 ; i<document.querySelectorAll(".drum").length ;i++){
   
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
 
 }); 
} 


//Detecting keyboard Press

document.addEventListener("keypress",function(event){
 makeSound(event.key);
 buttonAnimation(event.key);

});

 function makeSound(key){
  switch (key) {
    case "w":

      var audio=new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
   
    default:
      break;
   }


 } 

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);
}
// let audio= new Audio("/sounds/"+soundList[i]+".mp3");
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     audio.play();
