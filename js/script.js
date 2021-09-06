/** 
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/** 
Creare un array con 5 numeri casuali usando una funzione;(numeriPC) associando i numeri ad un array;
Fare un alert con 5 numeri generati casualmente dal pc;
Creare una funzione in cui l'utente inserisce uno alla volta i 5 numeri visti in precedenza in un altro array(numeriUtente) tramire 5 prompt
e dopo di che confrontare i due array e restituire il numero dei valori uguali e i valori stessi confrontando i due array;
Usare la funzione setTimeout 30secondi;
*/

/**
 * FUNZIONI
 */
// Funzione numeri utente 
function numeriUtente(){
    for (var i=1; i <= 5; i++) {
        var numero = prompt("Inserisci il numero");
        arrUtente.push(numero);
    }
    console.log("I numeri inseriti dall'utente sono;",arrUtente);
}
function numeriPc(){
    for (var i=1; i <= 5; i++) {
        var numero = Math.round(Math.random() * 20)
        arrPc.push(numero);
    }
}

function confronto(){
    for (var i=0; i < 5 ; i++){
        arrPc.includes(arrUtente[i]);
        arrNcomuni.push(arrUtente[i]);
    }
    console.log(arrNcomuni);
}

/**
 * PROGRAMMA PRINCIPALE
 */
// Dichiarazione variabili 
var arrPc = [];
var arrUtente = [];
var arrNcomuni = [];
numeriPc();
alert(arrPc);
console.log("I numeri sono:", arrPc);
setTimeout(numeriUtente, 3000);
setTimeout(confronto(),0);

