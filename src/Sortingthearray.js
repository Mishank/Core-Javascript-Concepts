const arr = [3, 5, 1];
const result = arr.sort((a, b) => b - a);
console.log(arr, result);

// books.sort((book1, book2) => {
//   const authorLastName1 = book1.author.split(" ")[1];
//   const authorLastName2 = book2.author.split(" ")[1];
//   return authorLastName1 < authorLastName2 ? -1 : 1;
// });
// console.log(books);
