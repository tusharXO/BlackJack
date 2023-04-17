let firstCard = 5
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let message
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")


function startGame(){
    renderGame()
}

function renderGame(){

    cardEl.textContent = "Cards: " + firstCard + " " + secondCard 

    sumEl.textContent ="Sum: " + sum

    if(sum < 21){
        message = "Do you want to draw another card"
    }
    else if(sum == 21){
        message = "You got Blackjack!"
    }
    else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard(){
    let newCard = 4
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + newCard
    sum += newCard
    renderGame() 
}