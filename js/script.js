// var email = prompt('Inserisci la tua mail');
// var lista = ['bool@gmail.com','bool1@gmail.com','bool2@gmail.com', 'bool3@gmail.com', 'bool4@gmail.com','bool5@gmail.com' ];
// // console.log(lista);
// var ris = false;
//
// for(var i = 0; i < lista.length; i++) {
//   if (email == lista[i] ){
//     ris = true;
//   }
// }
//
// // console.log(ris);
// if(ris == true) {
//   document.getElementById('text').innerHTML = "Accesso consentito";
// } else {
//   document.getElementById('text').innerHTML = "Accesso non consentito";
// }


// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var numberPlayer = Math.floor(Math.random()*7);
var numberPC = Math.floor(Math.random()*7);
console.log(numberPlayer);
console.log(numberPC);
var ris = 'I due numeri sono uguali';

if(numberPlayer > numberPC) {
  ris = 'Il Giocatore ha vinto ';
  // console.log(ris);
} else if (numberPlayer < numberPC) {
  ris = 'Il PC ha vinto ';
  // console.log(ris);
}
//  else {
//   ris = 'I due numeri sono uguali';
//   // console.log(ris);
// }

document.getElementById('risp').innerHTML= ris;
