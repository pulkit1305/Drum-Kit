//document.querySelector("button").addEventListener("click",handleClick);


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}


//Detecting Keyboard Press
document.addEventListener("keypress",function(){
makeSound(event.key);
buttonAnimation(event.key);
})



function makeSound(key){

  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();

      break;
    case "a":
      var au2dio2 = new Audio("sounds/tom-2.mp3");
      au2dio2.play();

      break;
    case "s":
      var audio2 = new Audio("sounds/tom-3.mp3");
      audio2.play();

      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();

      break;
    case "j":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();

      break;
    case "k":
      var audio6 = new Audio("sounds/kick-bass.mp3");

      audio6.play();

      break;
    case "l":
      var audio7 = new Audio("sounds/crash.mp3");
      audio7.play();

      break;
    default:
      console.log(buttonInnerHTML);

  }

}



function buttonAnimation(currentkey){
  var activeButton=document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },100);


}



function handleClick() {

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML)
buttonAnimation(buttonInnerHTML);

}
