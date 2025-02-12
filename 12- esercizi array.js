                          //       ESTRARE ARRAY

/*   1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
*/

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}


//-----------------------------------------------------------------------------------------
/*     2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и 
          будет выводить в консоль эти строки в нижнем регистре.
                Пример:
                standardizeStrings(favoriteCities)  выведет в консоль
                lisbon
                rome
                milan
                dublin
          Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах.
          В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работ
*/
const favoriteCities = ['liSBon', 'ROME',  'miLan',  'Dublin'];

function standardizeStrings(arr) {
   
    
       arr.forEach(val =>{
       // console.log(val.toLowerCase())
       })
    
    
}
standardizeStrings(favoriteCities)


//------------------------------------------------------------------
/*    3) Задача с собеседований. Напишите функцию REVERSE, которая принимает в себя строку и возвращает эту строку в обратном порядке.
            Пример:
            const someString = 'This is some strange string';
            reverse(someString) => 'gnirts egnarts emos si sihT'
        Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!
*/
const someString = 'This is some strange string';

/*function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString);
*/
//--------------------------------------------------------------------------------


/*     4) 4) Представьте такую реальную ситуацию. 
            У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. 
            Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

            const baseCurrencies = ['USD', 'EUR'];
            const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
            Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

            Пример:
                availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
                Вернет строку:

                Доступные валюты:
                UAH
                RUB
                Заметьте:

            - CNY (юань) исчез из списка валют, значит такая валюта закончилась
*/
const baseCurrencies = ['USD', 'EUR']; 
const additionalCurrencies = ['UAH', 'RUB', 'CNY']; // si pou aggiungere anche una variabile che unisce queste due insieme (...)


function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

  //  console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))





//--------------------------------------------------


