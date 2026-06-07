import { data } from './data.js'




function render (){
    const randomOutput = Math.floor(Math.random()* data.length)
    document.getElementById('heading').innerHTML = data[randomOutput].heading
    document.getElementById('paragraph').innerHTML = data[randomOutput].text
    document.getElementsByClassName('main-image').innerHTML=data[randomOutput].image
}