// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedere pari o dispari 
let userEvenOrOdd = prompt('dimmi pari o dispari');
// chiedere numero da 1 a 5 
let userNumber = parseInt(prompt('dimmi un numero da 1 a 5'));

// genero numero random per il pc 
const PcNumber = getRndInteger(1, 10);
console.log(PcNumber);

// sommo i numeri 
const sum = userNumber + PcNumber;
console.log(sum);

// richiamo funzione pari e dispari 
const evenOrOddResult = evenOrOdd(sum);

// dichiaro chi ha vinto 
if (evenOrOddResult === userEvenOrOdd){
    alert('hai vinto')
}   else {
    alert('hai perso')
}

// FUNCTIONS

// funzione per la generazione di numero random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione per pari o dispari 
function evenOrOdd(sum){

    let isEvenOrOdd;

    if(sum % 2 === 0){
        isEvenOrOdd = 'pari'
    }   else{
        isEvenOrOdd = 'dispari'
    }

    return isEvenOrOdd;
}
  