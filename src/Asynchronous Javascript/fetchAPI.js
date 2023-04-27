// example of fetching data usind fetch API

fetch("https://github.com/Mishank/Core-Javascript-Concepts")
  .then((res) => res.json())
  .then((data) => {
    console.log("success", data);
  })
  .catch((err) => {
    console.log(err);
  });
