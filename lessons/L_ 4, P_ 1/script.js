// Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. 
// Например A = [23,1,2,52,5,34,23,6,246,436];
// проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// найти максимальное число и минимальное число.
//Пункт 1

var n = prompt("Введите число (размерность массива): ");
n = +n;
var max, min;

//Определяем диапазон
var end = 200;
//Объявляем массив A,B
var A = [];		
var B = [];
A.length = n;

//Наполняем массив числами
for(i = 0; i < A.length; i ++){
	A[i] = Math.floor(Math.random() * end);
}
console.log('A: ' + A);
document.getElementById('A').innerHTML = A;

//Создаем функцию проверки числа на простоту
function isSimple (n){
    if ((n%2==0)&&(n!=2)) return false;
	else if (n==2) return true;
	else{ 
		 k=Math.round(Math.sqrt(n));
	     flag = false;
	             
	     for(i=2; i<k+1; i++)
	        if(n%i==0)
	        {
	          return false;
	          flag = true;
	          break;
	        }
	            
	     if (flag == false)
	       return true;
	}
};

//Проверяем массив A на наличие простых чисел и сохраняем в B
for(j = 0; j < A.length; j++){
	if(isSimple(A[j])){
		B.push(A[j]);
	}
};		
console.log('B: ' + B);
document.getElementById('B').innerHTML = B;

//Находим максимальное число
max = Math.max( ...A);
console.log('max: ' + max);
document.getElementById('max').innerHTML = max;

//Находим минимальное число
min = Math.min( ...A);
console.log('min: ' + min);
		document.getElementById('min').innerHTML = min;
