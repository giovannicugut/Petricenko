
//  L'utente deve agg 2 film e voto,(aggiun su un array)

//   1)---------- functia  quanti film hai visto ----------------------------------------------------------------------
let  numberOfFilmS;

function start (){
    numberOfFilmS = +prompt("Quanti film hai visto")

    while(numberOfFilmS =="" || numberOfFilmS == null || isNaN(numberOfFilmS)) {  // se avra quest consiz, rifare la domanda
        numberOfFilmS = +prompt("Quanti film hai visto")
    }
}
  start()


 //   2)------------ DB  ------------------------------------------------------------------------------------------------
const personalMovieDB = {
        count: numberOfFilmS,
        movies: {},
        actors: {},
        gener: [],
        privat: false,
            }


  //   3) ------------- Scrivere film che hai visto di 2 volte--------------------------------------------------------------------------
function rememberMyFilms(){      // nome del film visto e voto
for ( let i = 0; i < 2; i++){
    const a = prompt("Scrive un film che hai visto").trim() ,  // .trim cancella spazi vouti(qui sara la risposta dal utente)
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
  //7 rememberMyFilms()
 console.log(personalMovieDB)




//  4)  ------------ Sei un appasionato dei film?-------------------------------------------------------------------------------------
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
 // detectPersonalLevel()



 //   5) ---- se e privato o publico-----------------------------------------------------------------------------------------------
function showMyDB (para){
    if(para){
        console.log( " Non e privato")
    }
}
//  showMyDB(personalMovieDB.privat)



//  6)  ------------ Inserire genere film 2 volte-------------------------------------------------------------------------------------
function writeYourGenres (){
    for (let i = 1; i <=2; i++){
        const dom = prompt(`inserire il genere che ti piace sul posto ${i}`)
        personalMovieDB.gener[i-1] = dom
    }
}
 // writeYourGenres()
  console.log(personalMovieDB.gener)


 