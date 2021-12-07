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

//bugsy = new rabbit("bugsy", 50, 20, 60, 10);
//console.log(bugsy.listStats());
// bugsy.sitAndStare()
// bugsy.sitAndStare();
// bugsy.sitAndStare();
// bugsy.sitAndStare();
// bugsy.sitAndStare();
// bugsy.sitAndStare();
// console.log(bugsy.listStats());

const displayMessage = (message) =>{
  return 
  `
  +----------------------------+---------------------+
  |  |
  +----------------------------+---------------------+
  
  `;

}



console.clear()
bugsy = new rabbit("bugsy", 50, 20, 60, 10);
console.log(bugsy.listStats());
console.log("\nThis is a message\n")

const menu = require("console-menu")
menu(
  [
    { hotkey: "1", title: "Dog" },
    { hotkey: "2", title: "Cat", selected: true },
    { hotkey: "3", title: "Rabbit" },
    { separator: true },
    { hotkey: "?", title: "Help" },
  ],
  {
    header: "Example menu",
    border: true,
  }
).then((item) => {
  if (item) {
    
    console.log(item.title)

    //console.log("You chose: " + JSON.stringify(item));
  } else {
    console.log("You cancelled the menu.");
  }
});