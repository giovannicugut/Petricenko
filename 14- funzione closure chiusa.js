 //  funzione  CLOSURE (chiusache tiene in memoria il valore della variabile
 
 function loll(){
    let nu = 0 ;

      const fr = function(){
         nu = nu+1
         return nu
      }
 return fr
}
 
const mk =loll()
const aa =mk()  // ogni volta che viene chamato "mk" fara +1( il valore del var "nu" rimanere in memoria globale)
const ab =mk()
const ac =mk()

     //  console.log(aa,ab,ac)






//---------------------------------------------------------------------------

