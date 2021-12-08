let dog = require("./clsDog.js");
let cat = require("./clsCat.js");
let rabbit = require("./clsRabbit.js");
const bigText = require("./bigText.js")
const readline = require("readline");
const CFonts = require('cfonts');



//TODO: consider using an array to populate the constructor
// Const = [
//   (dogInits = ["dog", 50, 20, 60, 10]),
//   (catInits = ["cat", 50, 20, 60, 10]),
//   (rabbitInits = ["rabbit", 50, 20, 60, 10]),
// ];

//TODO: Save unfinished game to node.js local storage
// https://javascript.plainenglish.io/libraries-for-using-localstorage-in-your-node-js-project-3ff5ac1a3512


const bigTextObject = [
  {
    font: "3d",
    align: "center",
    colors: ["system"],
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: "0",
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: "node",
  },
  {
    font: "chrome",
    align: "center",
    colors: ["candy"],
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: "0",
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: "node",
  },
];




// async function that awaits a key press or ctrl-c (to kill)
const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", (data) => {
      const byteArray = [...data];
      if (byteArray.length > 0 && byteArray[0] === 3) {
        console.log("^C");
        process.exit(1);
      }
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};


const splashScreen = () =>{
  console.log("\033[2J");
  bigText.renderBigText("CyberPet", bigTextObject[0]);
  bigText.renderBigText("For best results|maximise your Terminal Window", bigTextObject[1]);
  console.log("Press any key to continue...");
  
}


const render = async() =>{
  //bugsy = new rabbit("bugsy", 50, 20, 60, 10);
  //console.log(bugsy.listStats());
  //console.log("\nThis is a message\n")
  splashScreen()
  await keypress();
  console.log("\033[2J");
  
}

render()
