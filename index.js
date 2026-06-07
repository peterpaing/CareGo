import { data } from './data.js'


data.forEach(item => {
    const img = new Image()
    img.src = item.image
})

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

    heading.textContent = data[randomOutput].heading
    paragraph.textContent = data[randomOutput].text
    mainImage.src = data[randomOutput].image
}

function randomMessage() {
    isClicked = true
    powerBtn.style.display = 'inline-block'
    render()
}

function restart() {
    if (isClicked) {
        heading.textContent = 'သဲသဲလေးရေ!'
        paragraph.textContent =
            'If koko knocked out or busy and you need to slip out, just leave a quick tap here!'
        mainImage.src = './images/main-image.png'

        isClicked = false
        powerBtn.style.display = 'none'
    }
}