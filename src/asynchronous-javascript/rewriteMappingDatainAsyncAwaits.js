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
    resolve(userStatuses);
  });
};

const getMappedUsers = async () => {
  try {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find(
        (userStatus) => userStatus.id === user.id
      ).isActive;
      return { ...user, isActive };
    });
    console.log(mappedUsers);
  } catch (err) {
    console.log("err", err);
  }
};

getMappedUsers();
