// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortedArray = stringArray.sort((a, b) => a.localeCompare(b));

console.log(sortedArray); // Очікуваний результат: ["apple", "banana", "orange", "pear"]
//Пояснення:
//localeCompare() — це метод рядка, який порівнює два рядки і повертає:
//-1, якщо перший рядок йде перед другим в алфавітному порядку,
//1, якщо перший рядок йде після другого,
//0, якщо рядки рівні.
//Таким чином, цей метод дозволяє точно налаштувати порівняння для різних мов і локалей.

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
//[{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const sortedUsers = users.toSorted((a, b) => a.age - b.age);

console.log(sortedUsers);
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}]

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
//[{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const filteredUsers = users.filter(user => user.age > 20);

console.log(filteredUsers);

//[{name: "John", age: 27}, {name: "Jane", age: 31}]

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Очікуваний результат: 15

 // Створи клас для калькулятора, який має такі методи:
 // - метод number, який набуває початкового значення для наступних операцій
 // - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 // - методи add, substruct, divide, multiply
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

xxx

 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // ##### Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  //  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

xxx
