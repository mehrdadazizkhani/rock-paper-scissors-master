const rulesBtn = document.querySelector('.rules-btn')
const closeBtn = document.querySelector('.close-btn')
const restartBtn = document.querySelector('.restart-btn')
const rules = document.querySelector('.rules-body')
const circles = document.querySelectorAll('.circle')
const playerChoose = document.querySelector('.player-choose')
const houseChoose = document.querySelector('.house-choose')
const selectStage = document.querySelector('.select-stage')
const resultStage = document.querySelector('.result-stage')
const scoreBoard = document.querySelector('.score-board')
const scoreDisplay = document.querySelector('.score')

let playerChooseClass
let houseChooseClass
let randomNumber
let score = 0
let houseChooses = ["scissors", "spock", "paper", "lizard", "rock"]


rules.classList.add("hide")
resultStage.style.display = "none";

rulesBtn.addEventListener("click", rulesOpenHandler)
closeBtn.addEventListener("click", rulesCloseHandler)
restartBtn.addEventListener("click", restartHandler)
scoreBoard.addEventListener("click", resetScore)
circles.forEach(circle => circle.addEventListener("click", resultHandler))

function rulesOpenHandler () {
    rules.classList.remove("hide")
}

function rulesCloseHandler () {
    rules.classList.add("hide")
}
function resultHandler (event) {
    selectStage.style.display = "none";
    resultStage.style.display = "flex";
    randomNumber = Math.floor(Math.random() * 5)
    
    playerChooseClass = houseChooses[event.target.id]
    houseChooseClass = houseChooses[randomNumber]

    playerChoose.classList.add(playerChooseClass)
    houseChoose.classList.add(houseChooseClass)

    playerChoose.children[0].appendChild(circles[event.target.id].cloneNode(true))
    houseChoose.children[0].appendChild(circles[randomNumber].cloneNode(true))
}

function restartHandler () {
    selectStage.style.display = "block";
    resultStage.style.display = "none";

    playerChoose.classList.remove(playerChooseClass)
    houseChoose.classList.remove(houseChooseClass)

    playerChoose.children[0].innerHTML = ''
    houseChoose.children[0].innerHTML = ''
}

function resetScore () {
    score = 0
    scoreDisplay.innerHTML = 0
}



