let randomNumberPlayer = Math.floor(Math.random()* 6 + 1);
let randomNumberComputer = Math.floor(Math.random()* 6 + 1);

if(randomNumberPlayer < randomNumberComputer){
  alert("Il tuo numero é: " + randomNumberPlayer + " mentre il numero del Computer è: " + randomNumberComputer);
  alert("Hai perso");
} else if (randomNumberPlayer == randomNumberComputer){
  alert("Il tuo numero é: " + randomNumberPlayer + " mentre il numero del Computer è: " + randomNumberComputer);
  alert("Hai pareggiato");
} else{
  alert("Il tuo numero é: " + randomNumberPlayer + " mentre il numero del Computer è: " + randomNumberComputer);
  alert("Hai vinto!");
}
