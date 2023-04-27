// function getItem() {
//   console.log(this);
// }

// getItem();

// task 2
// const item = {
//     title: "Ball",
//     getItem() {
//         console.log({this});

//     }
// }

// item.getItem();

// task 3
class Item {
  title = "Ball";
  getItem() {
    function someFn() {
      console.log("this", this);
    }
    someFn();
  }
}

const item = new Item();
item.getItem();
