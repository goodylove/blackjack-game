
const messageEl = document.getElementById("message-el");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");
const startBtn = document.getElementById("start-game");
const newBtn = document.getElementById("new-card");

let randomNum = Math.floor(Math.random() *21 + 1 )
let randomNum2 = Math.floor(Math.random()*10)
console.log(randomNum);

let firstCard = randomNum;
let secondCard = randomNum2;
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard;


startBtn.addEventListener("click",startGame)

function startGame(){

cardEl.textContent =  "card: " + firstCard + " " + secondCard
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
isAlive = false;
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