

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '22$',
    openNow: true
};

// --------controlla se e aperto o chiuso il ristorante-------------------------------
function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}
 console.log(isOpen(restorantData.openNow))


//------compare se il prezzo dei due piati costa meno del prezzo medio--------------------------------------------
function isAverageLunchPriceTrue(fDish, sDish, average) {  
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0,-1)) <= +average.slice(0,-1)) {  // slice(0,-1) copia la stringa e cancella lultimo elem,
        return 'Цена ниже средней';                                                      //  "+" converte in Nr
    } else {
        return 'Цена выше средней';
    }
}
// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


//-----funzione che copia oggetto in profondita e modifica i dati senza toccare il originale-------------------------------------------------------------
function transferWaitors(data) {  
    const copy = JSON.parse(JSON.stringify(data))

    copy.waitors[0] = {name: 'Mike', age: 32};  // nuovi dati inserite nella copia
    return copy;
}

 console.log(transferWaitors(restorantData))
 console.log(restorantData.waitors)


 function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

 console.log(transferWaitors(restorantData));


 let val = 7
 function createAdder() {
   function addNumbers(a, b) {
     let ret = a + b
    return ret
    }
   return addNumbers
 }
 let adder = createAdder()
 let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)


//-------------------------------------------------------------------------------
//   2)  Quale sara il resultato?
function foo(a,b) {
    const [st] = a  // chiama il primo elemento del arr,(se voi il sec. deve fare [,st]- aggiun la virgola davanti)
    const {eng} = b;
 
    return `${st} ${eng}`;
 }
 const esu = foo(['Hello', 'Привет',55], {ru: 'Мир', eng: 'World'})
 
 //console.log( esu)