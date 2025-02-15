
//  L'utente deve agg 2 film e voto,(aggiun su un array)

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        gener: [],
        privat: false,
            
        start: function(){  //functia  quanti film hai visto
                personalMovieDB.count = +prompt("Quanti film hai visto")
            
                while(personalMovieDB.count =="" || personalMovieDB.count == null || isNaN(numberOfpersonalMovieDB.countFilmS)) {  // se avra quest consiz, rifare la domanda
                    personalMovieDB.count = +prompt("Quanti film hai visto")
                }
            },
        rememberMyFilms: function (){      // nome del film visto e voto
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
                } ,
        detectPersonalLevel: function(){   // da una clasifica dipende da quantita di film visti
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
                 },
        showMyDB: function (hidden){   // Contolla se e PRIVATO
                    if(!hidden){
                        console.log( " Non e privato")
                    }
                },
        toggleVisibleMyDB: function(){
                 if(personalMovieDB.privat){
                        personalMovieDB.privat= false
                }else {
                        personalMovieDB.privat= true
                    }
                },
        writeYourGenres: function (){    // inserire GENERE FILM
            for (let i = 1; i <=2; i++){
                const domanda = prompt(`inserire il genere che ti piace sul posto ${i}`)
            
                if(domanda == "" || domanda == null){
                    console.log("errore di inserimento dati.  RIPROVARE")
                    i--
                }else{
                    personalMovieDB.gener[i-1] = domanda
                }
            
                personalMovieDB.gener.forEach((index,i)=>{
                    console.log(`Il tuo gerenere sul Nr. ${i+1} e ${ index}`)
                })
            
                }
            
                },
       
 }       




 //---------------------------------
 


 