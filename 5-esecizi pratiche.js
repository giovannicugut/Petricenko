//  cambio valuta+ sconto 
 const sc = 50;
 const eur = 20;
 const clie =50;

  function consv (a,b){
    return a*b
  }

  function sconto(c){
    console.log( (c*sc)/100)
  }
   sconto(consv(clie,eur)) 

   
//-------------------- 2 --------------------------------------------------------
/*Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
P.S. возвращать - это использовать ключевое слово return.
*/
function na (aa){
    return (`Ciao ${aa}`)
   }
    console.log( na("Michele") ) 



//----------------------- 3 ------------------------------------------------------
//Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
//Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6]. 

   function ar(ab){
  
    return [ab-1, ab , ab+1];
   }
   
   console.log(ar(9))

   
  //----------------------- 4 ----------------------------------------
/*
 Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
ызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
*/
  function ff (fix, volte){

    if( typeof fix !== "number" || fix <= 0){
       console.log("errore di inserimenro")
       return fix
    }
    let nn = ""

    for( i = 1; i <= volte; i++){
        if ( i === volte){
            nn += fix*i
        } else {
            nn += `${fix*i}---`
        }
    }
    return nn
  }
     console.log( ff(3,4)) 

//////------------------
function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);





function ger(d,k){

    let mm =""
    if( typeof d !== "number" || d <= 0){
        console.log(" hai inserito un numero nimore di 0 o una variabile")
    }
    for( let m =1; m <= k; m++){
        if (m ===k){
            mm += d*m
        }else{
            mm += `${d*m}-->`
        }
    }
    return mm
}
 console.log( ger(5,5) )
  