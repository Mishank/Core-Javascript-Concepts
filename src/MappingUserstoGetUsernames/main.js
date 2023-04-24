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
console.log({ users });

// const names = users.filter((user) => user.isActive).map((user) => user.name);

// users.forEach((user) => {
//   names.push(user.name)
// });

// users.sort((user1, user2) => (user1.age < user2.age ? 1 : 1));
// const names = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].isActive) {
//     names.push(users[i].name);
//   }
// }
// console.log({ names });
