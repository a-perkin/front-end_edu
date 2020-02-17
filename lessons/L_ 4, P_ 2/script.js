//Элементы массива между min -- max записать в массив B. Массив взять из 1го задания
// Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. 
// Например A = [23,1,2,52,5,34,23,6,246,436];		
//Пункт 2

var n = prompt("Введите число (размерность массива): ");
n = +n;

//Определяем диапазон
var end = 200;
//Объявляем массив A,B
var A = [];		
var B = [];
A.length = n;
var A_length = A.length;

//Наполняем массив числами
for(i = 0; i < A.length; i ++){
	A[i] = Math.floor(Math.random() * end);
}
console.log('A: ' + A);
document.getElementById('A').innerHTML = A;

//Формируем массив B
//Ищем минимальное значение, пушим в В, удаляем его с А и так в цикле		
for (i = 0; i < A_length; i++){
   min_value = Math.min( ...A);
   min_index = A.indexOf(min_value, 0);
   A.splice(min_index, 1);
   B.push(min_value);
}
console.log('B: ' + B);
document.getElementById('B').innerHTML = B;