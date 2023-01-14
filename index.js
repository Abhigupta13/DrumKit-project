// document.querySelector("button").addEventListener("click",handleLink);  
// // no parenthesis while using the function in addEventListener bcz  it will be compiled while refreshing the web page not on click



// function handleLink(){
//     alert("I got clicked");
// }


                     // one another way of doing this using anonymus function
// document.querySelectorAll("button").addEventListener("click",function(){
//     alert("I got clicked");
// });
const soundList=["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"];

for (var i=0 ; i<document.querySelectorAll(".drum").length ;i++){
   
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML=this.innerHTML;
   switch (buttonInnerHTML) {
    case "w":
      var audio=new Audio("/sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("/sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("/sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("/sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("/sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("/sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("/sounds/kick-bass.mp3");
      audio.play();
      break;
   
    default:
      break;
   }
      }); 
} 

// let audio= new Audio("/sounds/"+soundList[i]+".mp3");
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     audio.play();
