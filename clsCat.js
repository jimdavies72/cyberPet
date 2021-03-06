import {CyberPet} from "./clsCyberPet.js";

export class Cat extends CyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = CyberPet.getRandomInt(10, 15);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  stroke() {
    if (Cat.isRandomEvent(10)) {
      //cat falls asleep and rolls off couch
      this.gameMessage = `${this.petName} falls asleep and rolls off of the couch. She meant to do that...`
      this.updateStats(0, 5, -10, 20, -5);
    } else {
      this.updateStats(0, 0, 30, 30, 0);
    }
  }

  letOut() {
    if (Cat.isRandomEvent(2)) {
      //mouse catcher extrordinaire! best day ever!
      this.gameMessage = "Nom! Nom Nom! Mice!"
      this.updateStats(-20, 10, 30, 20, -4);
    } else {
      this.updateStats(-10, -10, 10, 20, -1);
    }
  }
};
