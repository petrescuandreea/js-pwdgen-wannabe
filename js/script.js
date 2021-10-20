// password generator 

// chiediamo all'utente il suo nome 
let firstName = prompt("Inserisci qui il tuo nome");
// console.log("Il nome dell'utente è: " , (firstName));


// chiediamo all'utente il suo cognome 
let lastName = prompt("Inserisci qui il tuo cognome");
// console.log("Il cognome dell'utente è: " , (lastName));


// chiediamo all'utente il suo colore preferito
let favColor = prompt("Inserisci qui il tuo colore preferito");
// console.log("Il colore preferito dell'utente è: " , (favColor));



// facciamo vedere la password all'utente
document.getElementById("mio-id").innerHTML = `La password assegnata è: ${firstName}${lastName}${favColor}21`;