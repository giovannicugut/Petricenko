

/*let fio=""
let lunghe = 10

for (i = 1; i < lunghe; i++){
        for (j = 0; j < i; j++){
            fio +="*"   //  
        }
    fio += "\n"   // "\"  - alt+92
}
console.log(fio)
*/


//------------------- 1 ----------------------------------
//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. 
// Цикл можно использовать любой
/*
for (i = 5; i<=10; i++){
    console.log(i)
}
*/


//-------------------- 2 ---------------------
//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл
/*
for (i = 20; i>=10; i--){
    if(i == 13){
        break
    }
    console.log(i)
    }
 */


   //----------- 3 ------------------------
  //При помощи цикла for выведите чётные числа от 2 до 10 включительно
/*
for (i = 1; i <= 10; i++){
        if (i % 2 ==0){
            console.log (i)
        }
     }
*/


//----------------- 4 ---------------------
//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
//  Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 //Цикл, который нужно переписать:
 
 //for (let i = 2; i <= 16; i++) {
 //    if (i % 2 === 0) {
 //        continue;
 //    } else {
 //       console.log(i);
 //    }
// }

///  risposta fatta da me con WHILE e sotto
/*
let i = 2

 while(i < 16){
    i++
    if(i % 2 ===0){
        continue;
    } else{
        console.log(i)
    }
 }
*/



//--------------------- 5 -------------------
//Заполните массив цифрами от 5 до 10 включительно. 
// Помните, что элементы массива можно сформировать так же, 
// как и обращаться к ним: arr[0]

/*
 /*const arr = []

 for (i = 5; i <= 10; i++){
    arr.push(i)
 }
 console.log(arr)
 */

//---------- 6 ---------------------------------------------
//Заполните новый массив (result) числами из старого (arr).
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//Должен получиться точно такой же массив

/*
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

*/


//--------------- 7 -----------------------------
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
/*
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

   

        // Не трогаем
    return data;
  

} 
secondTask()
*/
//---------------- 8 ---------------------------
//Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
/*
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
*/