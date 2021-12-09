
import {renderBigText} from "./bigText.js";
import {startGame} from "./userInterface.js";
import {keypress} from "./tools.js";
import chalk from "chalk";

//TODO: Save unfinished game to node.js local storage
// https://javascript.plainenglish.io/libraries-for-using-localstorage-in-your-node-js-project-3ff5ac1a3512

const bigTextArray = [
  {
    font: "doh",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 200,
    whitespaceBreak: true,
  },
  {
    font: "isometric3",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 200,
    whitespaceBreak: true,
  },
  {
    font: "blocks",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 200,
    whitespaceBreak: true,
  },
];

const splashScreen = () =>{
  console.clear()
  renderBigText("CyberPet", bigTextArray[0]);
  setTimeout(() => {
    console.log("\n")
    console.log(chalk.red.bgYellow.bold("For best results, maximise your Terminal window"))
    console.log("\n");
    console.log("Press any key to continue...");
  }, 500);
}

const render = async() =>{
  splashScreen()
  await keypress();
  console.clear();
  startGame();
}

render()
