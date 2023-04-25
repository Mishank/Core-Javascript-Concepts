const numbers = [1, 2];
const append = (arr, el) => {
  arr.push(el);
  return arr;
};

const newNumbers = append(numbers, 3);

console.log(newNumbers);
console.log(numbers);
