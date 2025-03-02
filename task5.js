const numbers = [2, 1, 6, 8, 9, 10, 12];

const firstOdd = numbers.find(num => num % 2 !== 0);
//метод файнд находит первое число соответсвущее условию
console.log(firstOdd); // Очікуваний результат: 1
