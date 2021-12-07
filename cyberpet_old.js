// this is the super pet
class CyberPet {
  static counter = 0;

  constructor(petName, maxAge, hunger, thirst, happiness, tiredness) {
    this._petName = petName;
    this._maxAge = maxAge;
    this._hunger = hunger;
    this._thirst = thirst;
    this._happiness = happiness;
    this._tiredness = tiredness;
    this._isAlive = true;
    this._age = 0;
    this._ageCounter = 0;
    this._generalHealth = 100;
  }

  get hunger() {
    return this._hunger;
  }
  set hunger(value) {
    this._hunger = value;
  }

  get thirst() {
    return this._thirst;
  }
  set thirst(value) {
    this._thirst = value;
  }

  get happiness() {
    return this._happiness;
  }
  set happiness(value) {
    this._happiness = value;
  }

  get tiredness() {
    return this._tiredness;
  }
  set tiredness(value) {
    this._tiredness = value;
  }

  get isAlive() {
    return this._isAlive;
  }
  set isAlive(value) {
    this._isAlive = value;
  }

  get generalHealth() {
    return this._generalHealth;
  }
  set generalHealth(value) {
    this._generalHealth = value;
  }

  listStats = () => {
    return {
      pet: this.constructor.name,
      name: this._petName,
      age: this._age,
      hunger: this._hunger,
      thirst: this._thirst,
      happiness: this._happiness,
      tiredness: this._tiredness,
      alive: this._isAlive,
    };
  };

  updateStats = (hunger, thirst, happiness, tiredness, generalHealth) => {
    this.hunger += hunger;
    this.thirst += thirst;
    this.happiness += happiness;
    this.tiredness += tiredness;
    this.generalHealth += generalHealth;
    this.checkStats();
    //TODO: add game over scenario
    if (this._isAlive === false) {
      //game over
    }
  };

  //TODO: checkStats currently only checks if pet is alive, need to check too tired/bored
  checkStats = () => {
    const object = this.listPetStats();
    for (let [key, value] of Object.entries(object)) {
      if (key === "hunger" && value <= 0) {
        this._isAlive = false;
      } else if (key === "thirst" && value >= 100) {
        this._isAlive = false;
      } else if (key === "generalHealth" && value <= 0) {
        this._isAlive = false;
      } else {
        this._isAlive = true;
      }
    }
  };

  isRandomEvent = (odds) => {
    const result = CyberPet.getRandomInt(1, odds);
    if (result === 1) {
      return true;
    }
    return false;
  };

  static getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  feed() {
    if (this.isRandomEvent(2)) {
      // pet knocks over food bowl, only eats half
      this.updateStats(-5, 0, 5, 0, -2);
    } else {
      this.updateStats(-10, 5, 10, 5, -1);
    }
  }

  giveWater() {
    if (this.isRandomEvent(5)) {
      // pet drinks way too much water
      this.updateStats(0, -20, -10, 10, -5);
    } else {
      this.updateStats(0, -10, 5, -5, 0);
    }
  }

  sleep() {
    if (this.isRandomEvent(3)) {
      // pet is woken early is grumpy
      this.updateStats(5, 0, -20, -10, -1);
    } else {
      this.updateStats(10, 0, 10, -20, 0);
    }
  }

  play() {
    if (this.isRandomEvent(20)) {
      //accidental injury
      this.updateStats(5, 10, -20, 20, -20);
    } else {
      this.updateStats(10, 15, 20, 20, 1);
    }
  }

  visitVet() {
    if (this.isRandomEvent(100)) {
      //vet accidentally puts pet to sleep
      this.updateStats(0, 0, 0, 0, -100);
    } else {
      this.updateStats(0, 0, 0, 0, 20);
    }
  }
};


class Dog extends CyberPet {
  constructor(petName,hunger, thirst, happiness, tiredness) {
    
    //randomise the maximum pet age
    const maxAge = CyberPet.getRandomInt(12, 17)
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  fetch(){
    if (this.isRandomEvent(50)){
      // dog swallows ball
      this.updateStats(0, 10, -20, 10, -30);
    }else{
      this.updateStats(0, 10, 5, 10, 0);
    }
  
  }

  swim(){
    if (this.isRandomEvent(2)){
      //best day ever!
      this.updateStats(0, 10, 30, 20, 2);
    }else{
      this.updateStats(0, -10, 10, 15, -1);
    }
  }

  tugOfWar(){
    if (this.isRandomEvent(4)){
      //exhausting day
      this.updateStats(10, 10, 20, 30, -1);
    }else{
      this.updateStats(0, 10, 20, 20, -1);
    }
  }

}

class Cat extends CyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = CyberPet.getRandomInt(10, 15);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  stroke(){
    if (this.isRandomEvent(10)){
      //cat falls asleep and rolls off couch
      this.updateStats(0, 5, -10, 20, -5);
    }else{
      this.updateStats(0, 0, 30, 30, 0);
    }
  }

  letOut(){
    if (this.isRandomEvent(2)){
      //mouse catcher extrordinaire! best day ever!
      this.updateStats(-20, 10, 30, 20, -4);
    }else{
      this.updateStats(-10, -10, 10, 20, -1);
    }
    
  }

}

class Rabbit extends CyberPet {
  constructor(petName, hunger, thirst, happiness, tiredness) {
    //randomise the maximum pet age
    const maxAge = CyberPet.getRandomInt(6, 10);
    super(petName, maxAge, hunger, thirst, happiness, tiredness);
  }

  stroke(){
    if (this.isRandomEvent(30)){
      //hibernates
      this.updateStats(40, 40, 10, 40, -10);
    }else{
      this.updateStats(0, 0, 10, 10, 1);
    }
  }

  Hypnotise(){
    if (this.isRandomEvent(100)){
      //oh-ohooh Derren, you are just a littel to good at this XoP! 
      this.updateStats(0, 0, -20, 40, -70);
    }else{
      this.updateStats(10, 10, 10, 20, -1);
    }
  }
}

rover = new Dog("rover", 10, 10, 10, 10)
console.log(rover.listPetStats())
rover.sleep()
console.log(rover.listPetStats());