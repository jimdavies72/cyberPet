let cyberPet = require("./clsCyberPet.js");

module.exports = class Rabbit extends cyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = cyberPet.getRandomInt(6, 10);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  stroke() {
    if (this.isRandomEvent(30)) {
      //hibernates
      this.updateStats(40, 40, 10, 40, -10);
    } else {
      this.updateStats(0, 0, 10, 10, 1);
    }
  }

  Hypnotise() {
    if (this.isRandomEvent(100)) {
      //oh-ohooh Derren, you are just a littel to good at this XoP!
      this.updateStats(0, 0, -20, 40, -70);
    } else {
      this.updateStats(10, 10, 10, 20, -1);
    }
  }
};
