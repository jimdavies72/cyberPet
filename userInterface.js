const inquirer = require("inquirer");
const _ = require('lodash');
const {Dog} = require("./clsDog");
const {Cat} = require("./clsCat");
const {Rabbit} = require("./clsRabbit");
//const chalk = require("chalk");

const initStats= [
  (dogInits = ["Dog", 50, 20, 60, 10]),
  (catInits = ["Cat", 50, 20, 60, 10]),
  (rabbitInits = ["Rabbit", 50, 20, 60, 10]),
];

// initialise the CyberPet object
let myCyberPet


const startGame = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newOrContinueGame",
        message: "What would you like to do?",
        choices: ["New Game", "Continue Game"],
      },
    ])
    .then((answers) => {
      
      if (answers.newOrContinueGame === "New Game"){
        //new game
        console.log("\033[2J");
        initNewGame()
      }else {
        // continue last game
      }
    });
}

module.exports = {
  startGame: startGame,
}

const initNewGame = () =>{
  inquirer
    .prompt([
      {
        type: "list",
        name: "typeOfPet",
        message: "What type of pet would you like?",
        choices: ["Dog", "Cat", "Rabbit"],
      },
      {
        type: "input",
        name: "petName",
        message: "What is you pets Name?",
      },
    ])
    .then((answers) => {
      if (answers.typeOfPet === "Dog") {
        //Initialise a Dog
        myCyberPet = new Dog(answers.petName, dogInits[1],dogInits[2], dogInits[3], dogInits[4])
        
      } else if (answers.typeOfPet === "Cat"){
        myCyberPet = new Cat(answers.petName, catInits[1],catInits[2], catInits[3], catInits[4])

      } else if (answers.typeOfPet === "Rabbit"){
        myCyberPet = new Rabbit(answers.petName, rabbitInits[1],rabbitInits[2], rabbitInits[3], rabbitInits[4])

      }
      myCyberPet.listStats()
      console.log("\n")
    })
    .then(() => gameLoop())
    .catch((error) => {
      console.log(error.message)
    }) 
}

const gameLoop = () => {
  
  const commonActions = 
  [
    "quitAndSave",
    "visitVet", 
    "play", 
    "sitAndStare",
    "sleep",
    "giveWater",
    "feed"
  ]
  let specificActions =  []

  if (myCyberPet.isAlive === false){
    // dead pet, game over.....
    console.log(`${myCyberPet.name} is dead`)
    return
  }

  if (myCyberPet.constructor.name === "Dog"){
    specificActions = _.concat(commonActions, ["fetch", "swim", "tugOfWar"])    
  } else if (myCyberPet.constructor.name === "Cat"){
      specificActions = _.concat(commonActions, ["stroke", "letOut"]) 
  } else if (myCyberPet.constructor.name === "Rabbit"){
    specificActions = _.concat(commonActions, ["stroke", "hypnotise"]) 
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do with you pet?",
        choices: specificActions,
      },
    ])
    .then((answer) => {
      
      switch(answer.action) {
        case "visitVet":
          myCyberPet.visitVet();
          break;
        case "play":
          myCyberPet.play();
          break;
        case "sitAndStare":
          myCyberPet.sitAndStare();
          break;
        case "sleep":
          myCyberPet.sleep();
          break;
        case "giveWater":
          myCyberPet.giveWater();
          break;
        case "feed":
          myCyberPet.feed();
          break;
        case "fetch":
          myCyberPet.fetch();
          break;
        case "swim":
          myCyberPet.swim();
          break;
        case "tugOfWar":
          myCyberPet.tugOfWar();
          break;
        case "stroke":
          myCyberPet.stroke();
          break;
        case "letOut":
          myCyberPet.letOut();
          break;
        case "hypnotise":
          myCyberPet.hypnotise();
          break;
        case "quitAndSave":
          //save and quit - coming soon
          break;
        default:
          //something not tracked. log out message for now
          console.log("Oops, something went wrong!")
          
          
      }
      console.log("\033[2J");
      console.log(myCyberPet.listStats())
      if (myCyberPet.gameMessage !== ""){
        console.log("\n");
        console.log(myCyberPet.gameMessage)
        myCyberPet.gameMessage = ""
      }
      console.log("\n")
    })
    .then(() => gameLoop())
}


