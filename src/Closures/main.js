const privateSecret = () => {
  const secret = "foo";

  return () => secret;
};

const getSecret = privateSecret();
console.log(getSecret());

// const privateCounter = () => {
//     let count =0;

//     return {
//         increment: (val = 1) => {
//             count += val;

//         },
//         getValue: () => {
//             return count;
//         },
//     },
// };

// const counter = privateCounter();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
