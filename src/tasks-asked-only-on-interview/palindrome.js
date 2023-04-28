const isPalidrome = (str) => {
  return str === str.split("").reverse().join("");
};
