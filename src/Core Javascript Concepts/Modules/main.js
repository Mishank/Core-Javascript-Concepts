// import getFullname, { getName, getSurName } from "./es6.js";

const { getName, getSurName, getFullname } = require("./common.js");
console.log(
  getName("Jack"),
  getSurName("Sparrow"),
  getFullname("Jack", "Sparrow")
);
