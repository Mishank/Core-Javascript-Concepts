// const uniqueArr = (arr) => {
//   return [...new Set(arr)];
// };

const uniqueArr = (arr) => {
  const result = [];
  arr.array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
};
