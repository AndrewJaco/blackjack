let player = {
  name: "Andy",
  chips: 200
}
let cards = []
let card
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + player.chips

//let sumEl = document.querySelector("#sum-el")

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  
  for(i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if(sum <= 20) {
    message = "Do you want to draw a card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack"
    hasBlackJack = true
  } else {
    message = "You're out of the game."
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard () {
  if(isAlive && hasBlackJack === false) {
    card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
 }

 function getRandomCard () {
  let randomCard = Math.floor(Math.random() * 13 ) + 1
  if(randomCard > 10) {
    randomCard = 10
  } else if (randomCard === 1) {
    randomCard = 11
  }
  return randomCard
 }
console.log(hasBlackJack)
