

// variable declarations
const messageEl = document.getElementById("message-el");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");
const startBtn = document.getElementById("start-game");
const newBtn = document.getElementById("new-card");
const restartBtn = document.getElementById("restart-game")
const playerEl = document.getElementById("player")
const congratSms = document.querySelector(".congrat-sms");

// assigning random numbers to firstCard and secondCard 


let userName = prompt("enter your name")

let firstCard = getRandomNum()
let secondCard = getRandomNum();
let cards = []
let sum = 0
let count =0

let hasBlackJack = false
let isAlive = true
// let userName = prompt("enter your name")


// create an object to store player name and chips

let player = {
    name:userName,
    chips:count,

}
playerEl.textContent = player.name  + ": $" + player.chips;


// function declarations

// get random number function
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




// start game function
function startGame() {

    cards = [firstCard ,secondCard]
    sum = firstCard + secondCard;
    renderGame()
}


// Render game function 
function renderGame(){
    
    cardEl.textContent =  "Card: "
    
    for(let i = 0; i<cards.length; i++ ){
        cardEl.textContent += cards[i] + " , "
    } 
    sumEl.textContent = "sum: " + sum;
    
    if(sum <= 20){
        messageEl.textContent = "Do you want to draw a new game";
        
    }
    else if(sum === 21){
        messageEl.textContent = "You've got BlackJack!";
        hasBlackJack = true;
        player.chips = count +=20
        playerEl.textContent = player.name  + ": $" + player.chips + "point";
        console.log(count);
        
        congratSms.classList.add("congrat")
        congratSms.textContent = "congratulation "  +  player.name
        
        setTimeout(() => {
            activiteBtn()
        }, 5000);
        
        
   
    }
    else{
        messageEl.textContent = "You're out of game";
        activiteBtn()
        isAlive = false

    }
}


function activiteBtn(){
    startBtn.classList.add("r-start-game")
newBtn.classList.add("r-new-game")
restartBtn.style.display = "block"
}


// function restart game

function restartGame(){
    window.location.reload()
}

// new card function
function newCard(){

    if(isAlive === true && hasBlackJack === false){
      console.log(isAlive, hasBlackJack);
        let card = getRandomNum()
        cards.push(card) 
        sum += card
        renderGame()
    }
    
    
       
   
    
    
    
}






// function find_max(nums){
// let max_num = Number.NEGATIVE_INFINITY;

// for(let num of nums){
//     if(num > max_num){

//     }
// }
// return max_num;
// }