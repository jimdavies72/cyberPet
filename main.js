let dog = require("./clsDog.js");
let cat = require("./clsCat.js");
let rabbit = require("./clsRabbit.js");

//TODO: consider using an array to populate the constructor
Const = [
  (dogInits = ["dog", 50, 20, 60, 10]),
  (catInits = ["cat", 50, 20, 60, 10]),
  (rabbitInits = ["rabbit", 50, 20, 60, 10]),
];

// rover = new dog("rover", 50, 20, 60, 10)
// console.log(rover.listStats())

// tiddles = new cat("tiddles", 50, 20, 60, 10);
// console.log(tiddles.listStats());

bugsy = new rabbit("bugsy", 50, 20, 60, 10);
console.log(bugsy.listStats());
bugsy.play()
console.log(bugsy.listStats());