let player = {
    name: "Per",
    chips: 145
}
let card = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let message
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    }else if(randomNumber > 10){
         return 10
    }else {
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
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
    else if(sum === 21){
        message = "You got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard(){
    if(isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard()
    sum += thirdCard
    card.push(thirdCard)
    renderGame()
    }
    else{
        return
    } 
}