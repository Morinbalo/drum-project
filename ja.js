let coOne=document.querySelector(".col-one")
let coTwo=document.querySelector(".col-two")
let coThree=document.querySelector(".col-three")
let coFour=document.querySelector(".col-four")
let coFive=document.querySelector(".col-five")
let coSix=document.querySelector(".col-six")
let coSeven=document.querySelector(".col-seven")



coOne.addEventListener('click',changeCo1)
coTwo.addEventListener('click',changeCo2)
coThree.addEventListener('click',changeCo3)
coFour.addEventListener('click',changeCo4)
coFive.addEventListener('click',changeCo5)
coSix.addEventListener('click',changeCo6)
coSeven.addEventListener('click',changeCo7)


let kickBass = new Audio('sound/kick-bass.mp3')
let snare = new Audio('sound/snare.mp3')
let tom3 = new Audio('sound/tom-3.mp3')
let crash = new Audio('sound/crash.mp3')
let tom4 = new Audio('sound/tom-4.mp3')
let tom1 = new Audio('sound/tom-1.mp3')
let tom2 = new Audio('sound/tom-2.mp3')

document.addEventListener('keypress',keyboard)
function keyboard(event){
  console.log(event)
  if(event.key==='w'){

    tom1.play()
  }
else if(event.key==='a'){

    tom2.play()
}
else if(event.key==='s'){
   
    tom3.play()

}
else if(event.key==='d'){
  
    tom4.play()
}
else if(event.key==='h'){
    snare.play()
}
else if(event.key==='k'){
  
    kickBass.play()
}

else if(event.key==='j'){

    crash.play()
}

else {alert('we dont have this drum' )}
}




function changeCo1(){

    tom1.play()

}
function changeCo2(){

    tom2.play()
}
function changeCo3(){
  
    tom3.play()
}
function changeCo4(){
    
    tom4.play()
}
function changeCo5(){
    snare.play()
}
function changeCo6(){
    kickBass.play()
}
function changeCo7(){
    crash.play()
}
