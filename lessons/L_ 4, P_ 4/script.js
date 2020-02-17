//Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
//Нельзя использовать стандартный метод reverse(). 
//Постарайтесь не использовать дополнительный массив. 
//Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).


var n = prompt("Введите число (размерность массива): ");
n = +n;
//Определяем диапазон
var end = 200;
//Объявляем массив A,B,C
var A = [];		
var B = [];

A.length = n;

//Наполняем массив числами
for(i = 0; i < A.length; i ++){
	A[i] = Math.floor(Math.random() * end);
}
console.log('A: ' + A);

for(i = 1; i <= n; i++){
    A.push(A[n - i]);
}
A.splice(0, n);

console.log('A(reverse): ' + A);
document.getElementById('A').innerHTML = A;
