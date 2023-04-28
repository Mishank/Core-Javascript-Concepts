const memoizeAdd = () => {
  let cache = {};

  return (value) => {
    if (value in cache) {
      console.log("fetching from cache");
      return cache[value];
    } else {
      console.log("calculating results");
      const results = value + 10;
      cache[value] = result;
      return results;
    }
  };
};

const newAdd = memoizeAdd();
console.log(newAdd(9)); // 19 calculated
console.log(newAdd(9)); // 19 cache
