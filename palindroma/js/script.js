// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('dimmi una parola');
const revWord = revertWord(userWord)

// FUNCTIONS
function revertWord(word) {
    let revertedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        const thisLetter = word[i];

        revertedWord += thisLetter;
    }

    return revertedWord;
}

if (revWord === userWord){
    alert('la parola che hai messo è palindroma')
}   else {
    alert('la parola non è palindroma')
}