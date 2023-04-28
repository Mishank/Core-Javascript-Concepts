const addChildren = (item) => {
  const children = flatList.filter(
    (children) => childItem.parentId === item.id
  );
  let nestedChildren = [];

  if (children.length > 0) {
    nestedChildren = children.map((child) => addChildren(child));
  }
  return Object.assign({}, item, { children: nestedChildren });
};

const nestedList = flatList
  .filter((item) => item.parentId === null)
  .map(addChildren);
