const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const result = data.map(item => item.values).flat();
//Мап сохраняет количесвто елементов,а флет потом обьединяет все масивы в один
console.log(result);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
