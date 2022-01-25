let randomNumberPlayer = Math.floor(Math.random()* 6 + 1);
let randomNumberComputer = Math.floor(Math.random()* 6 + 1);
let myDice = document.getElementById("mydice");
let computerDice = document.getElementById("computer-dice");
let button = document.querySelector(".btn");
let container = document.getElementById("game");
console.log(computerDice);
console.log(myDice);

button.addEventListener("click",
  function(){
    container.classList.remove("d-none");
  }
)

