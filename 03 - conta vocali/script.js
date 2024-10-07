/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocals = ["a", "e", "i", "o", "u"];
console.log(vocals);

// Dichiara la funzione qui.

function vocalsFind(newWord){
    let num=0;
    let newVocals=[];
    let newVocalsClean=[];
    newWordSplit=newWord.split("")
    for(let i=0; i<newWordSplit.length; i++){
        for(let z=0; z<5; z++){
            if(newWordSplit[i]==vocals[z]){
                num++;
                newVocals[i]=vocals[z];
            }
        }
    }
    newVocalsClean=newVocals.filter(Element=>Element)
    
    console.log(`${num} (${newVocalsClean})`);
    
}

// Invoca la funzione qui e stampa il risultato in console

vocalsFind(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)