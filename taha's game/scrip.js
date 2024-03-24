let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard];
console.log(cards)
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("Cards-el");


function getRandomCard() {
 return Math.floor(Math.random()*10) + 1

}


function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards:"
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " + " 
}
sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! you've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    isAlive = false;
    message = "You're out of the game! 😭";
  }
  messageEl.textContent = message;

}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card)
  console.log(cards)
  renderGame();
}




