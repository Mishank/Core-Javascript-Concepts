const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

// const range = (start, end) => {
//     const result = []
//     for (let i = start; i <= end; i++) {
//         result.push(i);
//     }
//     return result;
// }
