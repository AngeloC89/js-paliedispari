/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/




let word = (prompt('scrivi una parola:'));

function palindromeCheck(string) {
//toLowerCase permette al programma di leggere anche in caso di maiuscole - split scompone la parola- reverse la gira e join la ricompone.
     if(string.toLowerCase().split('').reverse().join('') === string.toLowerCase()){
    
      return console.log('palindroma')

    } else { console.log('not palindrome')

    }}

// abbiamo applicato la funzione alla variabile word...
palindromeCheck(word);


/***************************** Pari e Dispari ********************** */


let num = parseInt(prompt('scegli un numero da 1 a 5:'));
let oddEven = prompt('scrivi pari o dispari').toLowerCase;
let pcNun = getRndInteger(1, 5);
console.log(pcNun);

let sum = num + pcNun;
console.log(sum);


if ((oddEven !== 'pari') || (oddEven !== 'dispari')) {
    console.log('valore inserito non valido.')




