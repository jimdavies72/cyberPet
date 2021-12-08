
const bigText = require("./bigText.js")
const ui = require("./userInterface.js")
const {keypress} = require("./tools.js")


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
  ui.startGame()

}

render()
