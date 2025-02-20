/*
У вас есть небольшой кусочек данных о торговом центре, 
которые записаны в объекте shoppingMallData. 
Они содержат массив с данными о магазинах, где указана длина
 и ширина помещения; высоту помещения; стоимость отопления 
 за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough,
 которая буде возвращать строку. Если бюджета хватает для отопления 
 всего объема торгового центра - выводится 'Бюджета достаточно', 
 если нет - 'Бюджета недостаточно'. И все 🙂
*/

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50255
}

function isBudgetEnough(data) {
    let suma = 0
    let volumTot =0
    let contoTot= 0

   data.shops.forEach(oo =>  //"oo"- e un parametro di function  
        suma += oo.width * oo.length  //indcai chi viene interogato
           )

      volumTot = suma* data.height 
      contoTot = data.budget-(volumTot * data.moneyPer1m3)

      if(  contoTot>= 0){
      //  console.log("Il badget basta per pagare tutto")
      } else {
      //  console.log("Purtroppo NON TI BASTA IL BUDGET")
      }

    //   console.log(suma)
    //   console.log(volumTot)
    //   console.log(contoTot)

    
}


(isBudgetEnough(shoppingMallData))


//------------------------------------------------------------------------------
/*  2
Задача:
У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 
                    'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

Но команд может быть только 3 по 3 человека. 
Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. 
Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
Эти группы должны быть массивами. Как итог, функция возвращает новый массив
с тремя командами и строкой как 4й элемент.

Пример:
sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
  */


function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {  // dal 0 al 2
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}   //parentesi quadri del return hanno creato un unico array dove sara tutti gruppi dentro

 //console.log(sortStudentsByGroups(students));

