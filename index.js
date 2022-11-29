
const messageEl = document.getElementById("message-el");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");
const startBtn = document.getElementById("start-game");
const newBtn = document.getElementById("new-card");

// let randomNum2 = Math.floor(Math.random()*10)
// console.log(randomNum);

let firstCard = getRandomNum()
let secondCard = getRandomNum() ;
let cards = []
console.log(cards);
let hasBlackJack = false
let isAlive = true
let sum = 0


function getRandomNum(){
    let randomNum = Math.floor(Math.random() * 13 ) + 1

    if(randomNum > 10){
        return 10
    }
    else if(randomNum === 1){
        return 11
    }
    else{
        return randomNum
    }

}





function startGame() {

    cards = [firstCard ,secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){

cardEl.textContent =  "Card: "

for(let i = 0; i<cards.length; i++ ){
    cardEl.textContent +=cards[i] + " , "
} 
sumEl.textContent = "sum: " + sum;

if(sum <= 20){
    messageEl.textContent = "Do you want to draw a new game";
    
}
else if(sum === 21){
    messageEl.textContent = "You've got BlackJack!";
    hasBlackJack = true;
}
   else{
messageEl.textContent = "You're out of game";
isAlive = false
   }
}


function newCard(){

    if(isAlive === true && hasBlackJack === false){
      console.log(isAlive, hasBlackJack);
        let card = getRandomNum()
        cards.push(card) 
        sum+=card
        renderGame()
    
    }
    
    
}





// function find_max(nums){
// let max_num = Number.NEGATIVE_INFINITY;

// for(let num of nums){
//     if(num > max_num){

//     }
// }
// return max_num
// }