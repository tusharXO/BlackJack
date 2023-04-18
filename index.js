let firstCard = getRandomCard()
let secondCard = getRandomCard()
let card = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let message
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")


function getRandomCard(){
    return 5
}

function startGame(){
    renderGame()
}

function renderGame(){

    cardEl.textContent = "Cards: "
    for(let i = 0; i < card.length; i++){
        cardEl.textContent += card[i] + " "
    }

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
    let thirdCard = getRandomCard()
    sum += thirdCard
    card.push(thirdCard)
    renderGame() 
}