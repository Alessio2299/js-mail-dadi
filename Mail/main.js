const mail = ["ciccio1234@gmail.com", "pippo298@gmail.com", "mario4332@gmail.com"];

let myMail = prompt("Inserisci la tua email");

for (i=0; i < mail.length; i++){

  let currentMail = mail[i];

  if(currentMail == myMail){
    alert("Hai effettuato l'accesso!")
  }
}