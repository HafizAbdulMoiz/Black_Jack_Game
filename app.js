let player = {
    name : "MOIZ",
    chips : 145,
}
let cards = []; 
let sum = 0 ;
let hasBlackJack = false;
let isAlive = false;
let message = "";        
let messageEl = document.getElementById('message-el');        
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('card-el');
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " :  $" + player.chips;

// random card function
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) +1;
    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 11 ){
        return 11
    }else{

        return randomNumber;     
    }
}

// startGame func
function startGame(params) {
    isAlive = true ;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.innerText = "Cards : " ;
    for (let x=0; x < cards.length; x++){
        cardsEl.textContent += cards[x] + " "
    };
    sumEl.innerText = "Sum : " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card? 🙂";
    }else if (sum === 21){
        message = "Wohoo! You've got BlackJack 🎉";
        hasBlackJack = true;
    }else  {
        message = "You are out of a game 😢";
        isAlive = false;        
    }
    messageEl.innerText = message;
}

// new card fun
function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card
        cards.push(card)
        console.log(cards);
        renderGame()
    }
}
