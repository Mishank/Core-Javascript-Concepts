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
      // console.log("enough arguments");
      return fn(...args);
    } else {
      // console.log("need more arguments");
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const get = curry((property, object) => object[property]);
const getId = get("id");
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);
// const curriedSum = curry((a, b, c) => a + b + c);
// const partiallyCurriedSum = curriedSum(1);
// console.log(partiallyCurriedSum(2, 3));

// console.log(curriedSum(1));
// console.log(curriedSum(1, 2, 3));
