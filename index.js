
import {renderBigText} from "./bigText.js";
import {startGame} from "./userInterface.js";
import {keypress} from "./tools.js";
import chalk from "chalk";
import {bigTextArray} from "./questions.js";



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
