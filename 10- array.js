 //------Sotto uso 3 metodi per indentificare ogni elemnto del array :1 "for" ;  2"forEach()"  ; 3 "for of"

 /*
let  ko = [ 1, 2, 5, 6]

for ( let i = 0; i < ko.length; i++){   //  1  "For" classico(x arr lunghi), fa vedere il index(posto) e nome del elemneto in parte, 
   console.log(i, ko[i])                // puoi usare fermo (Break)
}

ko.forEach(function( index,valo,ko){      // 2  ".forEach ()"  Leggermente piu lento del "FOR" assomigla tanto, fa vedere il index(posto) e nome del elemneto in parte, 
    console.log(index,valo,ko)             // NON puo essere interrotto (No Break) 
})


for (let j of ko){                      // 3 "for of"   NON da il indice(posto) ma solo il nome del array      
    console.log( j)                     // puo essere interrotto
}
*/



//--------      Sotto uso: .split();   .join();   .sort()       ----------------------------------------------
/*
const uten = prompt(" ")     //l'utente dovra scrivere parole e separarle con la virgola
const separat = uten.split(",")  // .split()  dentro parentesi  si metti simbolo con quale sarano separate  le stringhe, (qui e con virgola)
console.log(separat)

console.log(separat.join(" ;"))  // .join() rimetti tutte le parone in una stringa e li divide(qui sono divid con ;)

console.log(separat.sort())      // .sort() ,sortiruet in ordine alfabetica, pero per i Nr. ce un altro metodo
*/

//----------- .sort () per numeri ---------------------------

/*const arnr = [23, 14,46,7]
function de (a,b){        //questa e l formula universale per clasific.i nr
    return a-b
}
arnr.sort(de)
 console.log(arnr)
*/






//---------- COPIA ARRAY--------------------------------------------


//    1mod.-----    .SPILICE()   ------------------------
const mol = ["do", "re", "mi"]
const nemol= mol.slice()
nemol[0]= "rrr"  // modificato post 0

//    console.log(nemol)
//    console.log(mol)



 //   2mod.-----     [... ] SPREAD -> e in grado di copiare e allegare insieme +arr

 const rev =[... mol]    // a fatto la copia
   //  console.log(rev)


 //-------------     [... ] SPREAD -> allegare
const video = ["youtube", "torrents"]
      musica = ["zaycev","muslon"]
      interne =[...video, ...musica, "att", 20]   //ho allegato in sieme e aggiunto altri due

   //  console.log(interne)


//-------------     [... ] SPREAD -> Con una function
/*
function loby(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}

const tor = [1,4,87]
  console.log(loby(... tor))
*/
 