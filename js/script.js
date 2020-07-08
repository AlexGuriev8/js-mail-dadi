var email = prompt('Inserisci la tua mail');
var lista = ['bool@gmail.com','bool1@gmail.com','bool2@gmail.com', 'bool3@gmail.com', 'bool4@gmail.com','bool5@gmail.com' ];
// console.log(lista);
var ris = false;

for(var i = 0; i < lista.length; i++) {
  if (email == lista[i] ){
    ris = true;
  }
}

// console.log(ris);
if(ris == true) {
  document.getElementById('text').innerHTML = "Accesso consetito";
} else {
  document.getElementById('text').innerHTML = "Accesso non consetito";
}
