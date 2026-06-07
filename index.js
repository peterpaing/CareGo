import { data } from './data.js'

 document.getElementsByClassName('btn')[0].addEventListener('click', randomMessage)
 document.getElementsByClassName('btn')[0].addEventListener('dblclick', restart)

let isClicked = false

function render (){
    const randomOutput = Math.floor(Math.random()* data.length)
    document.getElementById('heading').innerHTML = data[randomOutput].heading
    document.getElementById('paragraph').innerHTML = data[randomOutput].text
    document.getElementsByClassName('main-image')[0].src=data[randomOutput].image
}

function randomMessage (){
        isClicked = true
        return render ()

    
}

 function restart(){
       document.getElementById('heading').innerHTML ='သဲသဲလေးရေ!'
       document.getElementById('paragraph').innerHTML = 'If koko knocked out or busy and you need to slip out, just leave a quick tap here!'
       document.getElementsByClassName('main-image')[0].src='./images/main-image.png'
       isClicked = false 
}

