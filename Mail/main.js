const listMail = ["ciccio1234@gmail.com", "pippo298@gmail.com", "mario4332@gmail.com"];
const access = document.getElementById("access");
let myMail = document.getElementById("email");

let mail;
access.addEventListener("click",
  function(){
    for (i=0; i < listMail.length; i++){

      let currentMail = listMail[i];
    
      if(currentMail == myMail.value){
        mail = true;
      }
    }
    if(mail == true){
      alert("Hai effettuato l'accesso");
    } else{
      alert("Non puoi effettuare l'accesso.");
    }
    myMail.value = "";
  }
)



