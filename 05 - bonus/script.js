/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function greetings(newName){
    let salutiMattina="buongiorno";
    let salutiPomeriggio="buon pomeriggio"
    let salutiSera="buonasera"
    let ore=new Date().getHours()
    if(ore>6 && ore<13){
        console.log(salutiMattina+" "+newName);
    }else if(ore>12 && ore<18){
        console.log(salutiPomeriggio+" "+newName);
    }else if(ore>17 && ore<7){
        console.log(salutiSera+" "+newName);
    }
}

// Invoca la funzione qui e stampa il risultato in console

greetings(name)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.