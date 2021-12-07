
let cyberPet = require("./clsCyberPet.js")

module.exports = class Dog extends cyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = cyberPet.getRandomInt(12, 17);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  fetch() {
    if (this.isRandomEvent(50)) {
      // dog swallows ball
      this.updateStats(0, 10, -20, 10, -30);
    } else {
      this.updateStats(0, 10, 5, 10, 0);
    }
  }

  swim() {
    if (this.isRandomEvent(2)) {
      //best day ever!
      this.updateStats(0, 10, 30, 20, 2);
    } else {
      this.updateStats(0, -10, 10, 15, -1);
    }
  }

  tugOfWar() {
    if (this.isRandomEvent(4)) {
      //exhausting day
      this.updateStats(10, 10, 20, 30, -1);
    } else {
      this.updateStats(0, 10, 20, 20, -1);
    }
  }
};

