import { data } from './data.js'


const messageBtn = document.querySelector('.btn')
const powerBtn = document.querySelector('.fa-power-off')
const heading = document.getElementById('heading')
const paragraph = document.getElementById('paragraph')
const mainImage = document.querySelector('.main-image')

let isClicked = false


messageBtn.addEventListener('click', randomMessage)
powerBtn.addEventListener('click', restart)


function render() {
    const randomOutput = Math.floor(Math.random() * data.length)
    
    
    heading.innerHTML = data[randomOutput].heading
    paragraph.innerHTML = data[randomOutput].text
    mainImage.src = data[randomOutput].image
}

function randomMessage() {
    setTimeout(function() {
        isClicked = true
        powerBtn.style.display = 'inline-block'
        render() 
    }, 500)
}

function restart() {
    if (isClicked) {
        heading.innerHTML = 'သဲသဲလေးရေ!'
        paragraph.innerHTML = 'If koko knocked out or busy and you need to slip out, just leave a quick tap here!'
        mainImage.src = './images/main-image.png'
        
        isClicked = false 
        powerBtn.style.display = 'none'
    }
}