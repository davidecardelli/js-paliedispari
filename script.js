// Palidroma
// Chiedere all’utente di inserire una parola tramiite un form
// Creare una funzione per capire se la parola inserita è palindroma


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. Creo nell'HTML un campo per poter selezionare pari o dispari
// 2. Creo nell'HTML un form per poter inserire un numero da 1 a 5
// 3. Genero un numero casuale per il computer
// 3. Creo un bottone di invio dal quale far partire tutta la function
// 4. Prendo il valore pari o dispari prendo il numero inserito dentro il form

// FUNCTION
function getRundomNumber(min, max) {
    
    max++;

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    return randomNumber
}

const button = document.getElementById('userChoice');
const buttonReset = document.getElementById('reset');
const player1 = document.getElementById('result-player-1');
const player2 = document.getElementById('result-player-2');



button.addEventListener('click' , function(){

    const userChoiceEvenOrOdd = document.getElementById('even-or-odd').value;
    const userNumber = document.getElementById('user-number').value;

    message = `Il tuo numero è ${userNumber}`;
    player1.innerText = message

    const cpuNumber = getRundomNumber(1, 5);
    message = `Il tuo numero è ${cpuNumber}`;
    player2.innerText = message
    
})
