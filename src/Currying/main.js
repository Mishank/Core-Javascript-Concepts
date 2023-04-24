// const multiply = (num1) = > {
//     return (num2) => {
//         return num1 * num2;
//     };
// };

// const multiply = (num1) => (num2) => num1 * num2;

// console.log(multiply(2)(3));

const curry = function (fn) {
  var arity = fn.length;
  console.log({ arity });

  return function f1(...args) {
    if (args.length >= arity) {
      console.log("enough arguments");
      return fn(...args);
    }
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
console.log(curriedSum(1, 2, 3));
