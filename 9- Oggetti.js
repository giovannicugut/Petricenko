

const ob = {
    name: "Michel",
    cognome: "Rossi",
    citta: "NewYork",
    datiIndif:{
            alteza: 175,
            pesso: 65
    },
    protest: function(){
       // console.log("test")   
        }
}
//  ob.protest()


 // console.log(ob["citta"])

/*         // questa ne fara solo oggeto , ma oggetto NoN dentro oggetto , per vedere tutto o fatto sotto  un altro for
 for ( let key in ob) {      
    console.log(` ${key} o sa fie ${ob[key]}`)  // e = come primo conso.log (ob["citta"])
 }

*/

// qui sotto faccio vedere ivalori dei oggetti anche oggetto nel oggetto
for ( let key in ob){
    if (  typeof ob[key] == "object"){
        for( k in ob[key]){  // k e chiave dal secon. oggetto
          // console.log(`${k}  = ${ob[key][k]}`)  // ${ob[key][k]} dimonstra il valore del sec. oggetto
        }
    } else{
       // console.log( ` ${key} = ${ob[key]}`)
    }
    
}

 //  console.log((Object.keys(ob)).length)







//-----------!!!      COPIA Oggetti    !!!-------------------------------------------------


const ongg = {
    a: 1,
    b: 2,
    c:{
        m:3,
        j:5
    }
}

//---1-- con FUNCTION e UNIVERSALE si puo usare con diversi ogget
//  con Function puoi cambiare oggetto dentro oggetto(  deep copy)
function cop (par){   // abbiamo creato una funzione universale
    let un ={}

    for( let j in par){   //for -- in
       un[j] = par[j] 
    }
    return un
} 

const pov = cop(ongg)
pov.j = 40

 //   console.log(ongg)
 //   console.log(pov)


//---  2mod.        Object.assign()  NON cambia oggetto dentro oggetto (shallow copy)
const lo ={
            a:1,
            b:45
        }
const nelo = Object.assign({},lo)

//  console.log(nelo)

 //---  3mod        {... } SPREAD  --copia superficiale (shallow copy)

 const sprea ={... ongg}

     //console.log(sprea)
//-----------------------------------------------------------
 const gt = {... ongg}
  // console.log( gt)
