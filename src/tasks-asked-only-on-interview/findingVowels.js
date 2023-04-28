const findVowels = (str) => {
  const vowels = ["a", "e", "o", "u", "i"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      return vowels.includes(char) ? acc + 1 : acc;
    }, 0);

  //   let count = 0;
  //   for (let char of str.toLowerCase()) {
  //     if (vowels.includes(char)) {
  //       count++;
  //     }
  //   }
  return count;
};
