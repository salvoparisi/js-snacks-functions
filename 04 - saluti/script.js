/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

function greetings(newName){
    let saluti="ciao";
    let sumSaluti=saluti+" "+newName;
    return sumSaluti
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greetings(name));


//Risultato atteso se si passa 'Mario': // ciao Mario