// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let underageDiscount = 0.2;
let seniorDiscount = 0.4;
let ticketPricePerKm = 0.21;


function submitForm() {
    let userAge = parseInt(document.getElementById("age").value);
    let userKm = parseInt(document.getElementById("km").value);
    let ticketPrice = userKm * ticketPricePerKm;
    
    if (userAge < 18){
        document.getElementById("tckpricer").innerHTML = (ticketPrice - (ticketPrice * underageDiscount)).toFixed(2) + "€" ; 
    } else if (userAge > 65){
        document.getElementById("tckpricer").innerHTML = (ticketPrice - (ticketPrice * seniorDiscount)).toFixed(2) + "€";
    } else {
        document.getElementById("tckpricer").innerHTML = (ticketPrice).toFixed(2) + "€"; 
    }
}