
//---------------- 1 ------------------------------------------
// ciclo dentro un altro ciclo  (2 for() )
/*

*
**
***              // sara risultato finale
****
*****
******

*/

const lines = 7;
let re = ""

for ( i = 1; i < lines; i++){
    for (j = 0; j < i; j++){
        re += "*"  //ogni giro agiunge al re un * 
    }
    re += "\n"     //continua pero da una nuova riga
}
  //console.log(re)



 //------------------- 2 ---------------------------------------
 // Asomiglia al esercizio sopra , ma legermente diverso!!
 const neso = 5;
 let ult = '';
 
 for (let i = 0; i <= neso; i++) {
     for (let j = 0; j < neso - i; j++) {
         ult += " ";
     }
     for (let j = 0; j < 2 * i + 1; j++) {
         ult += "*";
     }
     ult += "\n";
 }
 
 //console.log(ult)



//------------------- 3 --------------------------------------------
//ciclo dentro il ciclo 3 volte (3 for) + metca

/*
 metca: for (i = 0; i < 3; i++){      // ho aggiunto una metca
    console.log(`Primo livelo ${i}`)
     for (j = 0; j < 3; j++){
        console.log(`Secondo livelo ${j}`)
          for (k = 0; k < 3; k++){
            if (k === 2) break metca;   // si ferma dove e mesa la metca
             console.log(`Terzo livelo ${k}`)
          }
    }
}

*/


 
