const numbers = [1, 2];
const append = (arr, el) => {
  return [...arr, el];
  // arr.push(el);
};

const newNumbers = append(numbers, 3);

console.log(newNumbers);
console.log(numbers);
