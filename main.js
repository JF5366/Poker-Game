import poker from "poker-hands"
//Texas Hold Em
// let poker = require('poker-hands');
console.log("game running")
//SETUP:
//Card Class - suit and rank -> pushed to deck                            DONE
//Deck class - holds 54 cards in array, can shuffle and deal              DONE
//Table - holds 5 cards                                                   DONE
//Players: you and opponent - each need 2 cards, bank account and methods  DONE 
//Rank order of winning hands                                             DONE
//


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
// console.log(player1.hand)
// console.log(opponent.hand)
// console.log(river)  
//console.log(deck1)
//console.log(deck1.deck.length)




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
    mydiv.style.height = "5em";
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
    console.log(player1.hand[0])
    console.log(player1.hand[1])
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
    console.log(p1.innerHTML)
  //CHANGE Card Images
  switch (p1.innerHTML) {
    case "AH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
    case "2H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
      break;
    case "2C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
      break;
    case "2D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
      break;
    case "2S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
      break;
    
    case "3H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
      break;
    case "3C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
      break;
    case "3D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
      break;
    case "3S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
      break;
    
     case "4H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
      break;
    case "4C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
      break;
    case "4D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
      break;
    case "4S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
      break;
    
    case "5H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
      break;
    case "5C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
      break;
    case "5D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
      break;
    case "5S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
      break;
    
    case "6H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
      break;
    case "6C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
      break;
    case "6D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
      break;
    case "6S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
      break;
    
    case "7H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
      break;
    case "7C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
      break;
    case "7D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
      break;
    case "7S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
      break;
    
    case "8H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
      break;
    case "8C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
      break;
    case "8D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
      break;
    case "8S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
      break;
      
    case "9H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
      break;
    case "9C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
      break;
    case "9D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
      break;
    case "9S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
      break;
    
    case "TH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
      break;
    case "TC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
      break;
    case "TD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
      break;
    case "TS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
      break;
      
    case "JH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
      break;
    case "JC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
      break;
    case "JD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
      break;
    case "JS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
      break;
      
    case "QH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
      break;
    case "QC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
      break;
    case "QD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
      break;
    case "QS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
      break;
    
    case "KH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
      break;
    case "KC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
      break;
    case "KD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
      break;
    case "KS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
      break;
    default:
      p1.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch p1
  switch (p2.innerHTML) {
    case "AH":
      p2.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      p2.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      p2.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      p2.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
      case "2H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
        break;
      case "2C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
        break;
      case "2D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
        break;
      case "2S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
        break;
      
      case "3H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
        break;
      case "3C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
        break;
      case "3D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
        break;
      case "3S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
        break;
      
       case "4H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
        break;
      case "4C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
        break;
      case "4D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
        break;
      case "4S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
        break;
      
      case "5H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
        break;
      case "5C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
        break;
      case "5D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
        break;
      case "5S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
        break;
      
      case "6H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
        break;
      case "6C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
        break;
      case "6D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
        break;
      case "6S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
        break;
      
      case "7H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
        break;
      case "7C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
        break;
      case "7D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
        break;
      case "7S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
        break;
      
      case "8H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
        break;
      case "8C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
        break;
      case "8D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
        break;
      case "8S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
        break;
        
      case "9H":
        p2.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
        break;
      case "9C":
        p2.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
        break;
      case "9D":
        p2.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
        break;
      case "9S":
        p2.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
        break;
      
      case "TH":
        p2.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
        break;
      case "TC":
        p2.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
        break;
      case "TD":
        p2.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
        break;
      case "TS":
        p2.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
        break;
        
      case "JH":
        p2.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
        break;
      case "JC":
        p2.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
        break;
      case "JD":
        p2.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
        break;
      case "JS":
        p2.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
        break;
        
      case "QH":
        p2.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
        break;
      case "QC":
        p2.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
        break;
      case "QD":
        p2.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
        break;
      case "QS":
        p2.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
        break;
      
      case "KH":
        p2.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
        break;
      case "KC":
        p2.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
        break;
      case "KD":
        p2.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
        break;
      case "KS":
        p2.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
        break;
      default:
        p2.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch p2

  switch (o1.innerHTML) {
    case "AH":
      o1.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      o1.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      o1.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      o1.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
    case "2H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
      break;
    case "2C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
      break;
    case "2D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
      break;
    case "2S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
      break;
    
    case "3H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
      break;
    case "3C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
      break;
    case "3D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
      break;
    case "3S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
      break;
    
     case "4H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
      break;
    case "4C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
      break;
    case "4D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
      break;
    case "4S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
      break;
    
    case "5H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
      break;
    case "5C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
      break;
    case "5D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
      break;
    case "5S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
      break;
    
    case "6H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
      break;
    case "6C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
      break;
    case "6D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
      break;
    case "6S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
      break;
    
    case "7H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
      break;
    case "7C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
      break;
    case "7D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
      break;
    case "7S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
      break;
    
    case "8H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
      break;
    case "8C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
      break;
    case "8D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
      break;
    case "8S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
      break;
      
    case "9H":
      o1.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
      break;
    case "9C":
      o1.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
      break;
    case "9D":
      o1.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
      break;
    case "9S":
      o1.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
      break;
    
    case "TH":
      o1.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
      break;
    case "TC":
      o1.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
      break;
    case "TD":
      o1.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
      break;
    case "TS":
      o1.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
      break;
      
    case "JH":
      o1.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
      break;
    case "JC":
      o1.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
      break;
    case "JD":
      o1.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
      break;
    case "JS":
      o1.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
      break;
      
    case "QH":
      o1.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
      break;
    case "QC":
      o1.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
      break;
    case "QD":
      o1.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
      break;
    case "QS":
      o1.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
      break;
    
    case "KH":
      o1.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
      break;
    case "KC":
      o1.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
      break;
    case "KD":
      o1.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
      break;
    case "KS":
      o1.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
      break;
    default:
      o1.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch o1
  switch (o2.innerHTML) {
    case "AH":
      o2.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      o2.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      o2.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      o2.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
      case "2H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
        break;
      case "2C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
        break;
      case "2D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
        break;
      case "2S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
        break;
      
      case "3H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
        break;
      case "3C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
        break;
      case "3D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
        break;
      case "3S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
        break;
      
       case "4H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
        break;
      case "4C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
        break;
      case "4D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
        break;
      case "4S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
        break;
      
      case "5H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
        break;
      case "5C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
        break;
      case "5D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
        break;
      case "5S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
        break;
      
      case "6H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
        break;
      case "6C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
        break;
      case "6D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
        break;
      case "6S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
        break;
      
      case "7H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
        break;
      case "7C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
        break;
      case "7D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
        break;
      case "7S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
        break;
      
      case "8H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
        break;
      case "8C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
        break;
      case "8D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
        break;
      case "8S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
        break;
        
      case "9H":
        o2.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
        break;
      case "9C":
        o2.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
        break;
      case "9D":
        o2.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
        break;
      case "9S":
        o2.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
        break;
      
      case "TH":
        o2.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
        break;
      case "TC":
        o2.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
        break;
      case "TD":
        o2.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
        break;
      case "TS":
        o2.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
        break;
        
      case "JH":
        o2.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
        break;
      case "JC":
        o2.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
        break;
      case "JD":
        o2.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
        break;
      case "JS":
        o2.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
        break;
        
      case "QH":
        o2.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
        break;
      case "QC":
        o2.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
        break;
      case "QD":
        o2.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
        break;
      case "QS":
        o2.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
        break;
      
      case "KH":
        o2.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
        break;
      case "KC":
        o2.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
        break;
      case "KD":
        o2.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
        break;
      case "KS":
        o2.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
        break;
      default:
        o2.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch o2

  switch (r1.innerHTML) {
    case "AH":
      r1.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      r1.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      r1.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      r1.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
    case "2H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
      break;
    case "2C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
      break;
    case "2D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
      break;
    case "2S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
      break;
    
    case "3H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
      break;
    case "3C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
      break;
    case "3D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
      break;
    case "3S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
      break;
    
     case "4H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
      break;
    case "4C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
      break;
    case "4D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
      break;
    case "4S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
      break;
    
    case "5H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
      break;
    case "5C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
      break;
    case "5D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
      break;
    case "5S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
      break;
    
    case "6H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
      break;
    case "6C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
      break;
    case "6D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
      break;
    case "6S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
      break;
    
    case "7H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
      break;
    case "7C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
      break;
    case "7D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
      break;
    case "7S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
      break;
    
    case "8H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
      break;
    case "8C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
      break;
    case "8D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
      break;
    case "8S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
      break;
      
    case "9H":
      r1.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
      break;
    case "9C":
      r1.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
      break;
    case "9D":
      r1.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
      break;
    case "9S":
      r1.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
      break;
    
    case "TH":
      r1.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
      break;
    case "TC":
      r1.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
      break;
    case "TD":
      r1.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
      break;
    case "TS":
      r1.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
      break;
      
    case "JH":
      r1.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
      break;
    case "JC":
      r1.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
      break;
    case "JD":
      r1.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
      break;
    case "JS":
      r1.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
      break;
      
    case "QH":
      r1.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
      break;
    case "QC":
      r1.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
      break;
    case "QD":
      r1.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
      break;
    case "QS":
      r1.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
      break;
    
    case "KH":
      r1.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
      break;
    case "KC":
      r1.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
      break;
    case "KD":
      r1.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
      break;
    case "KS":
      r1.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
      break;
    default:
      r1.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch r1
  switch (r2.innerHTML) {
    case "AH":
      r2.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      r2.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      r2.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      r2.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
      case "2H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
        break;
      case "2C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
        break;
      case "2D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
        break;
      case "2S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
        break;
      
      case "3H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
        break;
      case "3C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
        break;
      case "3D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
        break;
      case "3S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
        break;
      
       case "4H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
        break;
      case "4C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
        break;
      case "4D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
        break;
      case "4S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
        break;
      
      case "5H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
        break;
      case "5C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
        break;
      case "5D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
        break;
      case "5S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
        break;
      
      case "6H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
        break;
      case "6C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
        break;
      case "6D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
        break;
      case "6S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
        break;
      
      case "7H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
        break;
      case "7C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
        break;
      case "7D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
        break;
      case "7S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
        break;
      
      case "8H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
        break;
      case "8C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
        break;
      case "8D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
        break;
      case "8S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
        break;
        
      case "9H":
        r2.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
        break;
      case "9C":
        r2.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
        break;
      case "9D":
        r2.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
        break;
      case "9S":
        r2.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
        break;
      
      case "TH":
        r2.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
        break;
      case "TC":
        r2.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
        break;
      case "TD":
        r2.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
        break;
      case "TS":
        r2.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
        break;
        
      case "JH":
        r2.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
        break;
      case "JC":
        r2.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
        break;
      case "JD":
        r2.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
        break;
      case "JS":
        r2.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
        break;
        
      case "QH":
        r2.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
        break;
      case "QC":
        r2.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
        break;
      case "QD":
        r2.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
        break;
      case "QS":
        r2.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
        break;
      
      case "KH":
        r2.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
        break;
      case "KC":
        r2.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
        break;
      case "KD":
        r2.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
        break;
      case "KS":
        r2.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
        break;
      default:
        r2.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch r2
  switch (r3.innerHTML) {
    case "AH":
      r3.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      r3.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      r3.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      r3.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
      case "2H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
        break;
      case "2C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
        break;
      case "2D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
        break;
      case "2S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
        break;
      
      case "3H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
        break;
      case "3C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
        break;
      case "3D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
        break;
      case "3S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
        break;
      
       case "4H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
        break;
      case "4C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
        break;
      case "4D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
        break;
      case "4S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
        break;
      
      case "5H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
        break;
      case "5C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
        break;
      case "5D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
        break;
      case "5S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
        break;
      
      case "6H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
        break;
      case "6C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
        break;
      case "6D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
        break;
      case "6S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
        break;
      
      case "7H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
        break;
      case "7C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
        break;
      case "7D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
        break;
      case "7S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
        break;
      
      case "8H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
        break;
      case "8C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
        break;
      case "8D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
        break;
      case "8S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
        break;
        
      case "9H":
        r3.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
        break;
      case "9C":
        r3.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
        break;
      case "9D":
        r3.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
        break;
      case "9S":
        r3.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
        break;
      
      case "TH":
        r3.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
        break;
      case "TC":
        r3.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
        break;
      case "TD":
        r3.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
        break;
      case "TS":
        r3.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
        break;
        
      case "JH":
        r3.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
        break;
      case "JC":
        r3.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
        break;
      case "JD":
        r3.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
        break;
      case "JS":
        r3.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
        break;
        
      case "QH":
        r3.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
        break;
      case "QC":
        r3.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
        break;
      case "QD":
        r3.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
        break;
      case "QS":
        r3.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
        break;
      
      case "KH":
        r3.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
        break;
      case "KC":
        r3.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
        break;
      case "KD":
        r3.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
        break;
      case "KS":
        r3.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
        break;
      default:
        r3.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  }//end of r3
  switch (r4.innerHTML) {
    case "AH":
      r4.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      r4.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      r4.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      r4.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
      case "2H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
        break;
      case "2C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
        break;
      case "2D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
        break;
      case "2S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
        break;
      
      case "3H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
        break;
      case "3C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
        break;
      case "3D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
        break;
      case "3S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
        break;
      
       case "4H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
        break;
      case "4C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
        break;
      case "4D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
        break;
      case "4S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
        break;
      
      case "5H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
        break;
      case "5C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
        break;
      case "5D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
        break;
      case "5S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
        break;
      
      case "6H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
        break;
      case "6C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
        break;
      case "6D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
        break;
      case "6S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
        break;
      
      case "7H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
        break;
      case "7C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
        break;
      case "7D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
        break;
      case "7S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
        break;
      
      case "8H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
        break;
      case "8C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
        break;
      case "8D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
        break;
      case "8S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
        break;
        
      case "9H":
        r4.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
        break;
      case "9C":
        r4.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
        break;
      case "9D":
        r4.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
        break;
      case "9S":
        r4.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
        break;
      
      case "TH":
        r4.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
        break;
      case "TC":
        r4.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
        break;
      case "TD":
        r4.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
        break;
      case "TS":
        r4.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
        break;
        
      case "JH":
        r4.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
        break;
      case "JC":
        r4.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
        break;
      case "JD":
        r4.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
        break;
      case "JS":
        r4.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
        break;
        
      case "QH":
        r4.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
        break;
      case "QC":
        r4.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
        break;
      case "QD":
        r4.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
        break;
      case "QS":
        r4.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
        break;
      
      case "KH":
        r4.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
        break;
      case "KC":
        r4.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
        break;
      case "KD":
        r4.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
        break;
      case "KS":
        r4.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
        break;
      default:
        r4.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } //end of r4
  switch (r5.innerHTML) {
    case "AH":
      r5.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      r5.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      r5.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      r5.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
      case "2H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
        break;
      case "2C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
        break;
      case "2D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
        break;
      case "2S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
        break;
      
      case "3H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
        break;
      case "3C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
        break;
      case "3D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
        break;
      case "3S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
        break;
      
       case "4H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
        break;
      case "4C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
        break;
      case "4D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
        break;
      case "4S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
        break;
      
      case "5H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
        break;
      case "5C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
        break;
      case "5D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
        break;
      case "5S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
        break;
      
      case "6H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
        break;
      case "6C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
        break;
      case "6D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
        break;
      case "6S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
        break;
      
      case "7H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
        break;
      case "7C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
        break;
      case "7D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
        break;
      case "7S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
        break;
      
      case "8H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
        break;
      case "8C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
        break;
      case "8D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
        break;
      case "8S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
        break;
        
      case "9H":
        r5.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
        break;
      case "9C":
        r5.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
        break;
      case "9D":
        r5.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
        break;
      case "9S":
        r5.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
        break;
      
      case "TH":
        r5.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
        break;
      case "TC":
        r5.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
        break;
      case "TD":
        r5.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
        break;
      case "TS":
        r5.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
        break;
        
      case "JH":
        r5.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
        break;
      case "JC":
        r5.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
        break;
      case "JD":
        r5.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
        break;
      case "JS":
        r5.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
        break;
        
      case "QH":
        r5.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
        break;
      case "QC":
        r5.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
        break;
      case "QD":
        r5.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
        break;
      case "QS":
        r5.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
        break;
      
      case "KH":
        r5.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
        break;
      case "KC":
        r5.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
        break;
      case "KD":
        r5.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
        break;
      case "KS":
        r5.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
        break;
      default:
        r5.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch r5

 } // end of dealNew()


function placeBet (){   //Place your bets
      mydiv.style.display = "";
      options.style.display = "none";
      message.innerHTML = "Placing Bets...."
      player1.bet()
      playerBank.innerHTML = player1.bankaccount
      opponent.bet()
      opponentBank.innerHTML = opponent.bankaccount
      // console.log(currentPot)
      // console.log(player1.bankaccount)
      // console.log(opponent.bankaccount)
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
    //console.log(1)
  }else{
    mydiv.style.display = "";
    options.style.display = "none";
    mydiv.style.height = "6em";
    message.innerHTML = "Sorry, your opponent won round " + roundNum + " !"
    opponent.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
    //console.log(2)
  }
}


function nextRound(){
  if(player1.bankaccount > 0){
    roundNum++;
    message.innerHTML = "Would you like to play the next round?"
    mydiv.style.height = "";
    options.style.display = "";
    mydiv.style.display = "block"
    //gameStart();
  }
}




//Game Over
function gameOver(){
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Sorry, you have run out of money. Game over. You lost."
}


//Gameplay via timeouts calling the different functions
let roundNum = 1;

function gameStart(){   //Gameplay "loop" set through this function with timeouts
setTimeout(() => {
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Round " + roundNum
  mydiv.style.height = "5em";
}, 500);
setTimeout(() => {
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Dealing...."
  mydiv.style.height = "5em";
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
  findWinner()
}, 8000);
setTimeout(() => {
  nextRound()
}, 12000);
}
mybtn.addEventListener('click', () => {
  gameStart();
});




//RESET
var resetBtn = document.querySelector('.reset')

resetBtn.addEventListener("click", function () {
  window.location.href = window.location.href;
})
