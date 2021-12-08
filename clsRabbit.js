let cyberPet = require("./clsCyberPet.js");

class Rabbit extends cyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = cyberPet.getRandomInt(6, 10);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  stroke() {
    if (Rabbit.isRandomEvent(30)) {
      //hibernates
      this.gameMessage = `${this.petName} appears to have entered early hibernation!`
      this.updateStats(40, 40, 10, 40, -10);
    } else {
      this.updateStats(0, 0, 10, 10, 1);
    }
  }

  hypnotise() {
    if (Rabbit.isRandomEvent(100)) {
      //oh-ohooh Derren, you are just a littel to good at this XoP!
      this.gameMessage = "You are feeling verrrrrry sleepy, verrry sleepy... oops, thats probably a little too sleepy!"
      this.updateStats(0, 0, -20, 40, -70);
    } else {
      this.updateStats(10, 10, 10, 20, -1);
    }
  }
};


module.exports = {
  Rabbit: Rabbit
}