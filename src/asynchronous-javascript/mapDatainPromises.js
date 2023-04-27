const users = [
  {
    id: 1,
    name: "jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];

const useStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(getUserStatuses);
  });
};

// solution 1
// getUsers().then((users) => {
//   getUserStatuses().then((getUserStatuses) => {
//     const mappedUsers = users.map((user) => {});
//     const isActive = userStatuses.find(
//       (userStatus) => userStatus.id === user.id
//     ).isActive;
//     return { ...user, isActive };
//   });
//   console.log({ mappedUsers });
// });

//solution 2
const mapUsers = (users, userStatuses) => {
  return users.map((user) => {
    const isActive = userStatuses.find(
      (userStatus) => userStatus.id === user.id
    ).isActive;
  });
};

Promise.all([getUsers(), getUserStatuses()])
  .then(([users, userStatuses]) => mapUsers(users, userStatuses))
  .then((mappedUsers) => {
    console.log({ mappedUsers });
  });
