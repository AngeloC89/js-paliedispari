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





//scrico solo le varibili che servono in questa fase
let num = parseInt(prompt('scegli un numero da 1 a 5:'));

let pcNum = getRndInteger(1, 5);

let sum = num + pcNum;

// effettuo una verifica del numero inserito 
if (num > 5 || num < 1) {
    console.log('Valore non valido');
   

} else {
    //verifico anche la scelta tra pari e dispari
    let oddEven = prompt('scrivi pari o dispari');
    if ((oddEven !== 'pari') && (oddEven !== 'dispari')) {
        console.log('valore inserito non valido.')
        
    } else {
        //solo nel caso le verifiche siano andate a buon fine allora il programma effettua il confronto e stampa il risultato
        console.log('numero scelto dal PC', pcNum);
        console.log('numero scelto dall\'utente', num)
        console.log('la somma è', sum);
        console.log('scelta utente:', oddEven);
        if ((sum % 2 === 0 && oddEven === 'pari') || (sum % 2 !== 0 && oddEven === 'dispari')) {

            console.log('Hai vinto!');
        } else {

            console.log('Hai perso!');
        }
    
}};

//funzione per numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}








