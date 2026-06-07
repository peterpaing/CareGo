import { data } from './data.js'

 document.querySelector('.btn').addEventListener('click', randomMessage)
 document.querySelector('.fa-power-off').addEventListener('click', restart)

let isClicked = false

function render (){
    const randomOutput = Math.floor(Math.random()* data.length)
    document.getElementById('heading').innerHTML = data[randomOutput].heading
    document.getElementById('paragraph').innerHTML = data[randomOutput].text
    document.querySelector('.main-image').src=data[randomOutput].image
}

function randomMessage (){
      setTimeout (function(){
        isClicked = true
        document.querySelector('.fa-power-off').style.display ='inline-block'
        return render ()
      },500)
}

function restart(){
       
      if(isClicked){
      document.getElementById('heading').innerHTML ='သဲသဲလေးရေ!'
       document.getElementById('paragraph').innerHTML = 'If koko knocked out or busy and you need to slip out, just leave a quick tap here!'
       document.querySelector('.main-image').src='./images/main-image.png'
       isClicked = false 
       document.querySelector('.fa-power-off').style.display ='none'
       
} }     
