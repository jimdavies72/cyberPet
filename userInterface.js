import _ from "lodash";
import {Dog} from "./clsDog.js";
import {Cat} from "./clsCat.js";
import {Rabbit} from "./clsRabbit.js";
import chalk from 'chalk'
import inquirer from "inquirer";
import {setStorage, getStorage, deleteStorage} from "./localStorage.js";
import {gameQuestions, commonActions, initStats, bigTextArray} from "./questions.js";
import {renderBigText} from "./bigText.js";

// initialise the CyberPet object
let myCyberPet
export let specificActions = [];
const storedItem = 'cyberPet'

export const startGame = async () => {
    // returnedStored
    const rS = getStorage(storedItem)
    if (rS === ""){
      //no saved game so jump straight to new game
      console.clear();
      initNewGame();
    } else{
      // offer chance for new game or load saved game
      let response = await inquirer.prompt(gameQuestions[0])
      if (response.nCGame === "New Game") {
        //new game

        // delete stored data as a new game will overwrite if necessary
        deleteStorage(storedItem);
        console.clear();
        initNewGame();
      } else {
        // continue last saved game
        continueSavedGame(rS);
      }
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

    //lets check to see if the pet is still alive
    if (myCyberPet.isAlive === false){
      // dead pet, game over.....
      deleteStorage(storedItem);
      console.log(chalk.yellowBright.bgRedBright.bold(myCyberPet.gameMessage));
      return
    }
  
    let response = await inquirer.prompt([{
      type: "list",
      name: "action",
      message: "What do you want to do with you pet?",
      choices: specificActions
    }])
      
    if (action(response) === false){
      gameLoop()
    }else {
      console.clear()
      renderBigText("Good-Bye", bigTextArray[2]);
    }


  } catch (error){
    console.log(`😣 Error: ${error.message} has occured. game has shut down. 😪`)
  }
}

const action = (response) => {
  if (response.action === "quitAndSave") {
    let lS = myCyberPet.listStats();
    setStorage(storedItem, lS);
    return true
  } else {
    myCyberPet[response.action]();
    console.clear();
    console.log(myCyberPet.listStats());
    if (myCyberPet.gameMessage !== "") {
      console.log("\n");
      // could use Bottom Bar but doesnt seem to add anything different to this...
      console.log(chalk.red.bgCyan.bold(myCyberPet.gameMessage));
      myCyberPet.gameMessage = "";
    }
    console.log("\n");
    return false
  }
}

const continueSavedGame = (rS) =>{
  //TODO: Find a way where the object can be created from the a variable holding the class name. for now, its ifs buts and maybes.
  if (rS.pet == "Dog"){
    myCyberPet = new Dog(rS.name, rS.maxAge, rS.hunger, rS.thirst, rS.happiness, rS.tiredness)
    specificActions = _.concat(commonActions, ["fetch", "swim", "tugOfWar"]);

  }else if (rS.pet == "Cat") {
    myCyberPet = new Cat(rS.name, rS.maxAge, rS.hunger, rS.thirst, rS.happiness, rS.tiredness)
    specificActions = _.concat(commonActions, ["stroke", "letOut"]);

  }else if (rS.pet == "Rabbit") {
    myCyberPet = new Rabbit(rS.name, rS.maxAge, rS.hunger, rS.thirst, rS.happiness,rS.tiredness);
    specificActions = _.concat(commonActions, ["stroke", "hypnotise"]); 
  }
  myCyberPet.loadNewGame(rS);
  myCyberPet.listStats();
  console.log("\n");
  gameLoop();
}