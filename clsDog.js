import {CyberPet} from "./clsCyberPet.js";

export class Dog extends CyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = CyberPet.getRandomInt(12, 17);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  fetch() {
    if (Dog.isRandomEvent(50)) {
      // dog swallows ball
      this.gameMessage = `Cough, cough, choke... ${this.petName} has swallowed the ball.`;
      this.updateStats(0, 10, -20, 10, -30);
    } else {
      this.updateStats(0, 10, 5, 10, 0);
    }
  }

  swim() {
    if (Dog.isRandomEvent(2)) {
      //best day ever!
      this.gameMessage = "WOOOOHOOOO! BEST DAY EVER!!!!";
      this.updateStats(0, 10, 30, 20, 2);
    } else {
      this.updateStats(0, -10, 10, 15, -1);
    }
  }

  tugOfWar() {
    if (Dog.isRandomEvent(4)) {
      //exhausting day
      this.gameMessage = "WOOF WOOF WOOF! Again! Just after a little nap...";
      this.updateStats(10, 10, 20, 30, -1);
    } else {
      this.updateStats(0, 10, 20, 20, -1);
    }
  }
}
