/*
FIBANACI
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
 Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
 Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
 Пример:
fib(4) => ''0 1 1 2"
fib(7) => ''0 1 1 2 3 5 8"
fib('7') => ''"
fib(1) => "0"
fib(0) => ''"
*/
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = ''; 
    let first = 0; 
    let second = 1; 

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;   // questo sara il ultimo numero nella lista
        } else {
            result += `${first} `;  // contiene il spazio vuoto
        }

        let third = first + second;  //formula
        first = second;     // sostitue nr, al primo da il valore del secondo
        second = third;     // sostitue nr, al secondo da il valore del del terzo
    }

    return result;
}

 //  console.log(fib(6)) 