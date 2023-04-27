const requestManager = (url, options = {}, attempts = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(resolve)
      .catch((errror) => {
        const isLastAttempt = attempts === 1;
        if (isLastAttempt) {
          return reject(errror);
        }
        setTimeout(() => {
          requestManager(url, options, attempts - 1)
            .then(resolve)
            .catch(reject);
        }, 3000);
      });
  });
};

requestManager("https://foo.com")
  .then((response) => {
    console.log("response", response);
  })
  .catch((err) => {
    console.log({ err });
  });
