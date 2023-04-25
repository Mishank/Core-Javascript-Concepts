const users = [
  {
    id: 1,
    name: "jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// const isNameExists = (name, users) => users.some((user) => user.name === name);
const isNameExists = (name, users) => {
  const index = users.findIndex((user) => user.name === name);
  return index >= 0;
};

// const isNameExists = (name, users) => {
//   let exists = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exists = true;
//     }
//   }
// };
