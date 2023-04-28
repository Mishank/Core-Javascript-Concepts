const deepCompare = (source, target) => {
  if (typeOf(source) !== typeOf(target)) {
    return false;
  }
  if (typeOf(source) === "array") {
    if (source.length !== target.length) {
      return false;
    }

    return source.every((el, index) => deepCompare(el, target[index])); // поменяли
  }
  if (typeOf(source) === "object") {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }
    return Object.keys(source).every((key) =>
      deepCompare(source[key], target[key])
    );
  }

  if (typeOf(source) === "date") {
    return source.getTime() === target.getTime();
  }
  return source === target;
};
