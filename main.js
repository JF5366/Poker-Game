import poker from "poker-hands"
//Texas Hold Em


//Part 1: Card setup
let suit = ["H", "D", "C", "S"]
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let river = []
let currentPot = 0;

//Player Class
class Player{             
  constructor(name){       
    this.name = name,
    this.bankaccount = 1000,
    this.hand = []
  }
  bet(){ //increase bet
    this.bankaccount -= 100;
    currentPot += 100;
  }
  win(){
    this.bankaccount += 200;
    currentPot = 0;
  }
  lose(){//dont need?
    this.bankaccount -= 200;
    currentPot = 0;
  }
}
//Instantiate player, opponent and bank accounts
let player1 = new Player("player1")
let playerBank = document.querySelector("#playercash")
playerBank.innerHTML = player1.bankaccount

let opponent = new Player("opponent")
let opponentBank = document.querySelector("#opponentcash")
opponentBank.innerHTML = opponent.bankaccount

//Deck class
class Deck{
  constructor(){
    this.deck = [] //array of card objects
  }
  setup(){//adds cards to the deck to start
    for(let i = 0; i < suit.length; i++){         //push suit and rank to cards
    		for(let j = 0; j < rank.length; j++){
          let cardName = rank[j] + suit[i]
          let card = {
            name: cardName,
            suit: suit[i],
            rank: rank[j]
          }
          this.deck.push(card);
    		}
    	}
  }
  deal(){  //push 5 cards to the table, 2 to each hand
     for(let i=0; i<2; i++){  //loop twice to put 2 cards in players hand
      let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
      player1.hand.unshift(this.deck[cardIndex])           //push that card to a hand
      let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
    for(let i=0; i<2; i++){  //loop twice to put 2 cards in opponents hand
       let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
       opponent.hand.unshift(this.deck[cardIndex])           //push that card to a hand
       let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
      for(let i=0; i<5; i++){  //loop twice to put 2 cards in opponents hand
       let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
       river.unshift(this.deck[cardIndex])           //push that card to the river
       let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
  }
}

let deck1 = new Deck()
deck1.setup()

//Part 2: Game Play
//1. Are you ready to play? 
  var mydiv = document.querySelector("#box")   // Div appears to for player to choose yes or no
 // mydiv.style.display = "block"
  var mybtn = document.querySelector("#yes")
  var nobtn = document.querySelector("#no")

  mybtn.addEventListener("click", function () {
     mydiv.style.display = "none";
  });

  nobtn.addEventListener("click", function () {
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "Ok fine, dont play with me :(  \n\n Game Over" 
    mydiv.style.height = "6em";
    mydiv.style.padding = "1em";
 });

var options = document.querySelector('.options')
var message = document.querySelector('.message')

//2. If click yes -- functions for dealing: 
//Deal:
function dealNew (){
    deck1.deal()
    console.log(player1.hand)
    console.log(opponent.hand)
    console.log(river)

    p1.innerHTML = player1.hand[0].name;
    p2.innerHTML = player1.hand[1].name;
    o1.innerHTML = opponent.hand[0].name;
    o2.innerHTML = opponent.hand[1].name;
    r1.innerHTML = river[0].name;
    r2.innerHTML = river[1].name;
    r3.innerHTML = river[2].name;
    r4.innerHTML = river[3].name;
    r5.innerHTML = river[4].name;
    player1.hand.splice(2,2)       //remove cards from previous hand
    opponent.hand.splice(2,2) 
    river.splice(5,5) 
  
 
     //CHANGE Card Images
 let handsArray = [p1, p2, o1, o2, r1, r2, r3, r4, r5]
 let cardsArray = ["2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH", "AH", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD", "AD", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS", "AS", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC", "AC"]

 for(let i=0; i< handsArray.length; i++){ //loop through each card
  for(let j=0; j< cardsArray.length; j++){ 
  
    if (handsArray[i].innerHTML == cardsArray[j]){
     handsArray[i].parentNode.style.backgroundImage = `url('/${cardsArray[j]}.png')`

    }
}
}

 } // end of dealNew()


function placeBet (){   //Place your bets
      mydiv.style.display = "";
      options.style.display = "none";
      message.innerHTML = "Placing Bets...."
      message.style.fontSize = "2em";
      player1.bet()
      playerBank.innerHTML = player1.bankaccount
      opponent.bet()
      opponentBank.innerHTML = opponent.bankaccount
}



function findWinner(){   //who wins the round?
  let hand1 = `${river[0].name} ${river[1].name} ${river[2].name} ${river[3].name} ${river[4].name} ${player1.hand[0].name} ${player1.hand[1].name}`
  let hand2 = `${river[0].name} ${river[1].name} ${river[2].name} ${river[3].name} ${river[4].name} ${opponent.hand[0].name} ${player1.hand[1].name}`
  let winner = poker.judgeWinner([hand1, hand2]); 

  if(winner == 0){
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "You won round " + roundNum + " !"
    player1.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
    console.log(1)
  }else{
    mydiv.style.display = "";
    options.style.display = "none";
    mydiv.style.height = "7em";
    mydiv.style.width = "35em";
    message.innerHTML = "Sorry, your opponent won <br> round " + roundNum + " !"
    opponent.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
    console.log(2)
  }
}

//Game Over
function gameOver(){
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Sorry, you have ran out of money. <br> Game over."
}

//Win Game
function gameWin(){
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "You took all your opponent's <br> money! You Win!!."
}

function nextRound(){
  if(opponent.bankaccount <= 0){
    gameWin();
  }else{
    if(player1.bankaccount > 0){
      roundNum++;
      message.innerHTML = "Would you like to play the next round?"
      mydiv.style.height = "";
      mydiv.style.width = "40em";
      message.style.fontSize = "1.6em";
      options.style.display = "";
      mydiv.style.display = "block"
      //gameStart();
    }
    else{
      gameOver()
    }
  }
}






//Gameplay via timeouts calling the different functions
let roundNum = 1;

function gameStart(){   //Gameplay "loop" set through this function with timeouts
setTimeout(() => {
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Round " + roundNum
  message.style.fontSize = "2.1em";
  mydiv.style.height = "6em";
}, 500);
setTimeout(() => {
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Dealing...."
  mydiv.style.height = "6em";
}, 1500);
setTimeout(() => {
  mydiv.style.display = "none";
  dealNew();
  }, 3000);
setTimeout(() => {
  placeBet();
}, 4500);
setTimeout(() => {
  mydiv.style.display = "none";
}, 6000);
setTimeout(() => {
  findWinner();
}, 8000);
setTimeout(() => {
  nextRound()
}, 11000);
}
mybtn.addEventListener('click', () => {
  gameStart();
});




//RESET
var resetBtn = document.querySelector('.reset')

resetBtn.addEventListener("click", function () {
  window.location.href = window.location.href;
})
