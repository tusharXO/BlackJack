let firstCard = 5
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let message
let sumEl = document.getElementById("sum-el")
function startGame(){
    sumEl.textContent +=" " + sum

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