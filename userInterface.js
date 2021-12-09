import _ from "lodash";
import {Dog} from "./clsDog.js";
import {Cat} from "./clsCat.js";
import {Rabbit} from "./clsRabbit.js";
import chalk from 'chalk'
import inquirer from "inquirer";
import {gameQuestions, commonActions, initStats} from "./questions.js";

// initialise the CyberPet object
let myCyberPet
export let specificActions = [];

export const startGame = async () => {
  let response = await inquirer.prompt(gameQuestions[0])
  if (response.nCGame === "New Game") {
    //new game
    console.clear();
    initNewGame();
  } else {
    // continue last game
  }
}

const initNewGame = async () =>{
  try {
    let response = await inquirer.prompt(gameQuestions[1])
  
    if (response.typeOfPet === "Dog") {
      myCyberPet = new Dog(response.petName, initStats[0][1],initStats[0][2], initStats[0][3], initStats[0][4])
      specificActions = _.concat(commonActions, ["fetch", "swim", "tugOfWar"]);
  
    }else if (response.typeOfPet === "Cat"){
      myCyberPet = new Cat(response.petName, initStats[1][1],initStats[1][2], initStats[1][3], initStats[1][4])
      specificActions = _.concat(commonActions, ["stroke", "letOut"]);
  
    }else if (response.typeOfPet === "Rabbit"){
      myCyberPet = new Rabbit(response.petName, initStats[2][1], initStats[2][2], initStats[2][3], initStats[2][4])
      specificActions = _.concat(commonActions, ["stroke", "hypnotise"]); 
    }
    myCyberPet.listStats()
    console.log("\n")
  
    gameLoop()
  } catch (error){
    console.log(`😣 Error: ${error.message} has occured. game has shut down. 😪`);
  }
}

// main game loop
const gameLoop = async () => {
  try{
    if (myCyberPet.isAlive === false){
      // dead pet, game over.....
      console.log(chalk.yellowBright.bgRedBright.bold(myCyberPet.gameMessage));
      return
    }
  
    let response = await inquirer.prompt([{
      type: "list",
      name: "action",
      message: "What do you want to do with you pet?",
      choices: specificActions
    }])
      
    action(response)
    gameLoop()  
  } catch (error){
    console.log(`😣 Error: ${error.message} has occured. game has shut down. 😪`)
  }
}

const action = (response) => {
  if (response.action === "quitAndSave") {
    // TODO: quit the game. save to local storage
    return;
  } else {
    myCyberPet[response.action]();
    console.clear();
    console.log(myCyberPet.listStats());
    if (myCyberPet.gameMessage !== "") {
      console.log("\n");
      // could use Bottom BAr but doesnt seem to add anything different to this...
      console.log(chalk.red.bgCyan.bold(myCyberPet.gameMessage));
      myCyberPet.gameMessage = "";
    }
    console.log("\n");
  }
}