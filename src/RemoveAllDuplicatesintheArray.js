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
