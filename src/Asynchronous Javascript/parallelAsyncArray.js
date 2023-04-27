const asyncFunc1 = (callback) => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

const asyncFunc2 = (callback) => {
  setTimeout(() => {
    callback(2);
  }, 2000);
};

const asyncFunc3 = (callback) => {
  setTimeout(() => {
    callback(3);
  }, 1000);
};

asyncParallel = (asyncFuncs, callback) => {
  const resultArr = new Array(asyncFuncs.length);
  let resultCounter = 0;

  asyncFuncs.forEach((asyncFunc, index) => {
    asyncFunc(() => {
      resultArr[index] = value;
      resultCounter++;
      if (resultCounter >= asyncFunc.length) {
        callback(resultArr);
      }
    });
  });
  asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
    console.log(result);
  });
};
