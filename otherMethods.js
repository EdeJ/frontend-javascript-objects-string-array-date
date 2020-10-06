/* Opdracht 1 */
// Schrijf een functie die de diameter van een cirkel verwacht als parameter en
// de omtrek van die cirkel bererekent en teruggeeft
// tip: PI * diameter
// ---- Verwachte uitkomsten:
// 4 geeft 12.566370614359172
// 12 geeft 37.69911184307752

function perimeter(diamter) {
    return Math.PI * diamter;
}
console.log(perimeter(4));
console.log(perimeter(12));


/* Opdracht 2 */
// Schrijf bovenstaande functie nogmaals, maar zorg er nu voor dat de uitkomst wordt afgerond
// ---- Verwachte uitkomsten:
// 4 geeft 13
// 12 geeft 38

function perimeterRounded(diamter) {
    return Math.round(Math.PI * diamter);
}
console.log(perimeterRounded(4));
console.log(perimeterRounded(12));


/* Opdracht 3 */
// Schrijf een functie die het laatste karakter in een string teruggeeft
// ---- Verwachte uitkomsten:
// "vermicelli" geeft "i"
// "kroepoek" geeft "k"

const lastChar = (word) => {

    return word.slice(- 1);
}

console.log(lastChar("vermicelli"));
console.log(lastChar("kroepoek"));

/* Opdracht 4 */
// Schrijf een functie die een array maakt van alle woorden in een zin, maar wanneer er
// spaties aan het begin of einde van de zin staan, deze niet in de array zet.
// ---- Verwachte uitkomsten:
// " De pot verwijt de ketel dat hij zwart ziet" geeft ['De', 'pot', 'verwijt', 'de', 'ketel', 'dat', 'hij', 'zwart', 'ziet'];
// "Niet geschoten is altijd mis " geeft [ 'Niet', 'geschoten', 'is', 'altijd', 'mis' ];

function stringToArray(myString) {
    myString = myString.trim();
    return myString.split(' ');
}

console.log(stringToArray('De pot verwijt de ketel dat hij zwart ziet'));
console.log(stringToArray('Niet geschoten is altijd mis '));

/* Opdracht 5 */
// Maak een variabele today aan en sla daar een nieuw date-object in op
// Print in de console (in nummers) in welke maand we nu zitten
// Print in de console (in nummers) welk uur van de dag het is

const myDate = new Date();
console.log('maand: ' + myDate.getMonth());
console.log('uur: ' + myDate.getHours());



/* BONUS OPDRACHT (als je tijd over hebt) */
// Schrijf een functie die twee strings als parameters verwacht en de langste naam teruggeeft.
// als de namen beide even lang zijn geeft hij de string "Beide namen zijn even lang" terug
// ---- Verwachte uitkomsten:
// "Nick", "Nova" geeft "Beide namen zijn even lang"
// "Mitchel", "Nick" geeft "Mitchel"

function compareStrings(stringOne, stringTwo) {
    if (stringOne.length === stringTwo.length) {
        return 'Beide namen zijn even lang'
    }
    if (stringOne.length > stringTwo.length) {
        return `${stringOne} is langer dan ${stringTwo}`
    } else {
        return `${stringTwo} is langer dan ${stringOne}`
    }
}

console.log(compareStrings('Nick', 'Nova'));
console.log(compareStrings('Mitchel', 'Nick'));



