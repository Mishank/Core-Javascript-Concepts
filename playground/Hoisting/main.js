console.log(foo);
foo = 1;
// is not difiend

console.log(foo);
var foo = 2;
//dont work

var foo;
console.log(foo);
foo = 2;

foo = 3;
console.log(foo);
var foo;

foo();
function foo() {}

const a = 1;
