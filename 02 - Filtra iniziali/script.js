/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let namesInitial=prompt("Scegli una lettera");

// Dichiara la funzione qui.

function initialName(array){
    let arrayInitial=[];
    for(let i=0; i<array.length; i++){
        arrayInitial[i] = array[i].charAt(0);
        if (arrayInitial[i]==namesInitial){
            console.log(array[i]);
        }
    }
}

// Invoca la funzione qui e stampa il risultato in console

initialName(names)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]