// this is the super pet
module.exports = class CyberPet {
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

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  get maxAge() {
    return this._maxAge;
  }
  set maxAge(value) {
    this._maxAge = value;
  }

  get ageCounter() {
    return this._ageCounter;
  }
  set ageCounter(value) {
    this._ageCounter = value;
  }

  get generalHealth() {
    return this._generalHealth;
  }
  set generalHealth(value) {
    this._generalHealth = value;
  }

  listStats = (allStats = false) => {
    
    
    return {
      pet: this.constructor.name,
      name: this._petName,
      age: this._age,
      ageCounter: this._ageCounter,
      hunger: this._hunger,
      thirst: this._thirst,
      happiness: this._happiness,
      tiredness: this._tiredness,
      generalHealth: this._generalHealth,
      alive: this._isAlive,
    };

  };

  //TODO: perhaps have it so each animal passes different values. at the moment they are static across all animals.
  updateStats = (hunger, thirst, happiness, tiredness, generalHealth) => {
    this.hunger += hunger;
    this.thirst += thirst;
    this.happiness += happiness;
    this.tiredness += tiredness;
    this.generalHealth += generalHealth;
    
    // pet ages
    this.lifeTick();
    this.checkStats();
    // //TODO: add game over scenario
    if (this._isAlive === false) {
      //game over
    }
  };

  //TODO: checkStats currently only checks if pet is alive, need to check too tired/bored
  checkStats = () => {
    if (CyberPet.isRandomEvent(100) === true) {
      // random unexplained death, because life is just like that.
      this._isAlive = false;
    } else {
      const object = this.listStats();
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
    }
  };

  static isRandomEvent = (odds) => {
    if (CyberPet.getRandomInt(1, odds) === 1) {
      return true;
    }
    return false;
  };

  static getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  lifeTick = () => {
    // Age continues...
    this.ageCounter++
    if(this.ageCounter >= 5){
      this.age++
    }

    if (this.age >= this.maxAge){
      //goodnight old sport!
      this.isAlive = false;
    }
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

  sitAndStare() {
    //life goes on, even when you are doing nothing....
    this.updateStats(2, 2, -2, 2, -1);
  }

  play() {
    this.updateStats(5, 10, -20, 20, -20);
    // if (this.isRandomEvent(20)) {
    //   //accidental injury
    //   this.updateStats(5, 10, -20, 20, -20);
    // } else {
    //   this.updateStats(10, 15, 20, 20, 1);
    // }
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

