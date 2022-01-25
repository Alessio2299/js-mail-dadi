let randomNumberPlayer = Math.floor(Math.random()* 6 + 1);
let randomNumberComputer = Math.floor(Math.random()* 6 + 1);
let myDice = document.getElementById("mydice");
let computerDice = document.getElementById("computer-dice");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset")
let container = document.getElementById("game");
let result = document.getElementById("result");
 console.log(result)

start.addEventListener("click",
  function(){
    container.classList.remove("d-none");
    
    if(randomNumberPlayer==2){
      myDice.classList.remove("dice1");
      myDice.classList.add("dice2");
    } else if(randomNumberPlayer==3){
      myDice.classList.remove("dice2");
      myDice.classList.add("dice3");
    } else if(randomNumberPlayer==4){
      myDice.classList.remove("dice3");
      myDice.classList.add("dice4");
    } else if(randomNumberPlayer==5){
      myDice.classList.remove("dice4");
      myDice.classList.add("dice5");
    } else if(randomNumberPlayer==6){
      myDice.classList.remove("dice5");
      myDice.classList.add("dice6");
    }
    if(randomNumberComputer==2){
      computerDice.classList.remove("dice1");
      computerDice.classList.add("dice2");
    } else if(randomNumberComputer==3){
      computerDice.classList.remove("dice2");
      computerDice.classList.add("dice3");
    } else if(randomNumberComputer==4){
      computerDice.classList.remove("dice3");
      computerDice.classList.add("dice4");
    } else if(randomNumberComputer==5){
      computerDice.classList.remove("dice4");
      computerDice.classList.add("dice5");
    } else if(randomNumberComputer==6){
      computerDice.classList.remove("dice5");
      computerDice.classList.add("dice6");
    }
    
    if(randomNumberPlayer < randomNumberComputer){
      result.innerHTML= "Hai perso!";
      result.classList.add("text-danger");
    } else if (randomNumberPlayer == randomNumberComputer){
      result.innerHTML= "Hai pareggiato!";
      result.classList.add("text-warning");
    } else{
      result.innerHTML= "Hai vinto!";
      result.classList.add("text-success");
    } 
  }
)
reset.addEventListener("click",
  function(){
    location.reload();
  }
)
