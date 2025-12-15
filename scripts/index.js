//-- NUMERI DELLA TOMBOLA --

//devo creare un array che contenga i numeri da 1 a 90

const totalNumberOfTombola = Array.from(Array(90).keys());
console.log("da 1 a 90", totalNumberOfTombola);

//-- NUMERI RANDOM --
const randomNumbers = Math.ceil(Math.random() * 90);

//-- ARRAY VUOTO PER LE CELLE

const box = [];
console.log(box);

//-- CELLE PER I NUMERI --
// dobbiamo creare un numero di celle pari al numero dei numeri totali della tombola
// dobbiamo recuperare il riferimento per la parte di HTML che conterrà il tabellone
// devo creare un cassettino all'interno del quale inserire il numero
// devo creare un elemento <div> per la cella
// devo creare un elemento testuale <h3> dove inserire i numeri
// devo creare un modo per riempire di testo la cella

const createCellsInTombola = function () {
  const tombolaSection = document.getElementById("board");
  console.log(tombolaSection);
  for (let i = 0; i < totalNumberOfTombola.length; i++) {
    box.push([]);
    const numberCell = document.createElement("div");
    const numberCellValue = document.createElement("h3");
    numberCellValue.innerText = i + 1;
    numberCellValue.classList = "square";
    numberCell.appendChild(numberCellValue);
    // appendo la cella al calendario
    tombolaSection.appendChild(numberCell);
  }
};

createCellsInTombola();

//-- CREARE COLLEGAMENTO CASELLA/NUMERO ESTRATTO --

//-- CREARE IL BOTTONE CON IL NUMERO RANDOMICO
// recupera il bottone

const dice = document.querySelector("#dice button");
dice.addEventListener("click", function () {
  const randomNumber = Math.ceil(Math.random() * 90);
  console.log("NUMERO ESTRATTO!", randomNumber);
});

// qui puoi evidenziare il numero sul tabellone
// per esempio:
// highlightNumber(randomNumber);

/*-- CREARE IL BOTTONE CON IL NUMERO RANDOMICO

dice.addEventListener("click", randomNumbers);
console.log("CLICCATA CELLA!", randomNumbers);*/

/* illuminiamo la cella del giorno corrispondente in modo permanente
if (i +1 === //al numero randomico estratto) {
    numberCellValue.classList.add(//sezione css per illuminare la cella)}
// devo aggiungere anche un fattore per cui una volta cliccato il numero quest
}*/

/*const createCellsInTombola = function () {
  // dobbiamo creare un numero di celle pari al numero dei giorni del mese corrente
  // recuperiamo prima di tutto un riferimento alla parte di HTML che ospiterà le nostre celle
  const calendarSection = document.getElementById('board') // <section id="calendar"></section>
  const numberOfDays = numberOfDaysInCurrentMonth() // 31
  // dobbiamo creare una cella numberOfDays volte
  for (let i = 0; i < numberOfDays; i++) {
    // per es. 31 volte...
    // prima di tutto inserisco un "cassettino" nell'"armadio" appointments
    appointments.push([])

    const dayCell = document.createElement('div') // <div></div>
    dayCell.classList.add('day') // <div class="day"></div>
    const dayCellValue = document.createElement('h3') // <h3></h3>
    dayCellValue.textContent = i + 1 // dall'1 al 31 x dicembre
    // CHICCA: illuminiamo la cella corrispondente al giorno di oggi
    if (i + 1 === now.getDate()) {
      // comparo il valore della cella con il giorno di oggi
      // se questa cella rappresenterà il giorno di oggi, la coloro
      dayCellValue.classList.add('color-epic')
    }

    // prima di appendere la cella alla pagina, la arricchisco anche di un EVENT LISTENER
    // la renderò sensibile agli eventi di tipo "click"
    dayCellValue.addEventListener('click', function (e) {
      // questa funzione si attiverà ogni volta che cliccherò su una qualsiasi delle celle: proviamola!
      console.log('CLICCATA CELLA!', e)
      //   ora dovrei andare a recuperare un riferimento per quello span con scritto "Click on a day"
      const span = document.getElementById('newMeetingDay') // <span>Click on a day</span>
      // ...e dovrei riempirlo con lo stesso numero della cella su cui ho appena cliccato
      span.textContent = i + 1
    })

    // appendo alla cella l'h3
    dayCell.appendChild(dayCellValue) // <div class="day"> <h3>1</h3> </div>
    // appendo la cella al calendario
    calendarSection.appendChild(dayCell)
  }
*/

//-----------------------

//const totalNumbers = function () {
/*i numeri della tombola sono compresi da 0 a 89
  devo far sì che la funzione riempia l'array con i seguenti numeri (da 1 a 90)

 const arrayOfNumbers = Array.from(Array(90).keys())*/

// PASSAGGI FONDAMENTALI TOMBOLA

// 1) per 90 volte (con un for o un forEach su un array di 90 elementi) bisogna:
// - creare un div
// - riempire il div con un numero progressivo dall'1 al 90
// - appendere il div al DOM
// -> TABELLONE!
/*
// 2) fare un button e collegarci una funzione: questa funzione deve ESTRARRE CASUALMENTE un numero dall'1 al 90
Math.random(); // -> torna un numero tra 0 e 1
Math.random() * 90; // -> 0.00000090 / 89.999999
Math.ceil(Math.random() * 90); // -> 1 / 90

// 3) Una volta estratto un numero casuale, la casella corrispondente del tabellone deve illuminarsi

console.log(document.querySelectorAll(".day"));
// dovete ciclare questo array, e confrontare il suo contenuto testuale (es. '1', '2', '3, '4' etc.) con il numero appena estratto (es. 5)
// troverete UN match, e a questo div dovete assegnare una classe css ('estratto')
 


if (i + 1 === randomNumbers) {
      dayCellValue.classList.add("color-epic");
    }*/
