// const uniqueArr = (arr) => {
//   return [...new Set(arr)];
// };

// const uniqueArr = (arr) => {
//   const result = [];
//   arr.array.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// };

const uniqueArr = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};

// console.log(uniqueArr([{ a: 1 }, { a: 1 }]));
// [{a:1}]

console.log(uniqueArr([1, 1, 2]));
//[1,2]
