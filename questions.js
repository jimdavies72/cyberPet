

const startQuestion = [
  {
  type: "list",
  name: "nCGame",
  message: "What would you like to do?",
  choices: ["New Game", "Continue Game"],
  },
]

const initQuestions = [
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
];

export const gameQuestions = [
  startQuestion,
  initQuestions,
]

export const commonActions = [
  "quitAndSave",
  "visitVet",
  "play",
  "sitAndStare",
  "sleep",
  "giveWater",
  "feed",
];

export const initStats = [
  ["Dog", 50, 20, 60, 10],
  ["Cat", 50, 20, 60, 10],
  ["Rabbit", 50, 20, 60, 10],
];
