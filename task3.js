const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const hasYoungPerson = people.some(person => person.age < 20);
//для проверки есть ли хоть ктото кто соответсвует условиям используется some
console.log(hasYoungPerson);  // true
