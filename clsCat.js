let cyberPet = require("./clsCyberPet.js");

module.exports = class Cat extends cyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = cyberPet.getRandomInt(10, 15);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  stroke() {
    if (this.isRandomEvent(10)) {
      //cat falls asleep and rolls off couch
      this.updateStats(0, 5, -10, 20, -5);
    } else {
      this.updateStats(0, 0, 30, 30, 0);
    }
  }

  letOut() {
    if (this.isRandomEvent(2)) {
      //mouse catcher extrordinaire! best day ever!
      this.updateStats(-20, 10, 30, 20, -4);
    } else {
      this.updateStats(-10, -10, 10, 20, -1);
    }
  }
};
