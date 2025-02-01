
//  L'utente deve agg 2 film e voto,(aggiun su un array)


let  numberOfFilmS;

function start (){
    numberOfFilmS = +prompt("Quanti film hai visto")

    while(numberOfFilmS =="" || numberOfFilmS == null || isNaN(numberOfFilmS)) {  // se avra quest consiz, rifare la domanda
        numberOfFilmS = +prompt("Quanti film hai visto")
    }
}
//  start()

const personalMovieDB = {
        count: numberOfFilmS,
        movies: {},
        actors: {},
        gener: [],
        privat: false,
            }
     
function rememberMyFilms(){      // nome del film visto e voto
for ( let i = 0; i < 2; i++){
    const a = prompt("Scrive un film che hai visto"),
          b = prompt("Da un voto al film ")

    if(a != null && b !=null && a != "" && b!= "" && a != a.length < 20){
        personalMovieDB.movies[a]= b
        console.log("tutto OK")
    } else{
        alert("ERROR")
        i--;
    }
}
}
  // rememberMyFilms()
// console.log(personalMovieDB)


function detectPersonalLevel(){   // da una clasifica dipende da quantita di fil visti
if(numberOfFilmS < 10){
    console.log("NON sei un appasionato dei Film")
}else if(numberOfFilmS >= 10 && numberOfFilmS < 20){
    console.log("Guardi Film al livelo Normale")
}else if( numberOfFilmS >= 20 ){
    console.log(" sei un appasionato dei FILM")
}
else if(numberOfFilmS != "number"){
    console.log(" Error, non e stato selezionato niete")
}
}
//  detectPersonalLevel()

function showMyDB (para){
    if(para){
        console.log( " Non e privato")
    }
}
//  showMyDB(personalMovieDB.privat)


function writeYourGenres (){
    for (let i = 1; i <=3; i++){
        const dom = prompt(`inserire il genere che ti piace sul posto ${i}`)
        personalMovieDB.gener[i-1] = dom
    }
}
  //writeYourGenres()
