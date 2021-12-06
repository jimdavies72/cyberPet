// this is the super pet

class CyberPet {
  static counter = 0;

  constructor(petName, age, hunger, thirst, happiness, tiredness) {
    this._petName = petName;
    this._age = age;
    this._hunger = hunger;
    this._thirst = thirst;
    this._happiness = happiness;
    this._tiredness = tiredness;
    this._isAlive = true;
    this.ageCounter = 0;
  }

  listPetStats() {
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
  }

  get hunger() {
    return this._hunger;
  }
  set hunger(value) {
    console.log("temp", value)
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

  feed() {
    this.hunger += -10;
    this.thirst += 10;
    this.happiness += 10;
    this.tiredness += 10;
  }

  giveWater(){
    this.hunger += 5;
    this.thirst += -10;
    this.happiness += 5;
    this.tiredness += -5;
  }

  sleep(){
    this.hunger += 20;
    this.thirst += 20;
    this.happiness += 10;
    this.tiredness += -20;
  }

  play(){
    this.hunger += 10;
    this.thirst += 15;
    this.happiness += 20;
    this.tiredness += 20;
  }

}

class Dog extends CyberPet {
  constructor(petName, age, hunger, thirst, happiness, tiredness) {
    super(petName, age, hunger, thirst, happiness, tiredness);
  }

  fetch(){
    this.hunger += 5;
    this.thirst += 5;
    this.happiness += 5;
    this.tiredness += 20;
  }

  swim(){
    this.hunger += 5;
    this.thirst += -20;
    this.happiness += 10;
    this.tiredness += 15;

  }

  tugOfWar(){
    this.hunger += 10;
    this.thirst += 10;
    this.happiness += 20;
    this.tiredness += 25;

  }

}

class Cat extends CyberPet {
  constructor(petName, age, hunger, thirst, happiness, tiredness) {
    super(petName, age, hunger, thirst, happiness, tiredness);
  }

  stroke(){
    this.hunger += 5;
    this.thirst += 5;
    this.happiness += 30;
    this.tiredness += 30;
  }

  letOut(){
    this.hunger += 10;
    this.thirst += 10;
    this.happiness += 10;
    this.tiredness += 20;
  }

}

class Rabbit extends CyberPet {
  constructor(petName, age, hunger, thirst, happiness, tiredness) {
    super(petName, age, hunger, thirst, happiness, tiredness);
  }

  stroke() {
    this.hunger += 0;
    this.thirst += 5;
    this.happiness += 10;
    this.tiredness += 10;
  }

  runAround() {
    this.hunger += 10;
    this.thirst += 10;
    this.happiness += 10;
    this.tiredness += 20;
  }


}

bugs = new Rabbit("bugs", 3, 10, 10, 10, 10)
console.log(bugs.listPetStats())
bugs.stroke()
console.log(bugs.listPetStats());