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

  updateStats(hunger, thirst, happiness, tiredness){
    this.hunger += hunger;
    this.thirst += thirst;
    this.happiness += happiness;
    this.tiredness += tiredness;

  }

  feed() {
    this.updateStats(-10, 10, 10, 10);
  }

  giveWater(){
    this.updateStats(5, 10, 5, -5);
  }

  sleep(){
    this.updateStats(20, 20, 10, -20);
  }

  play(){
    this.updateStats(10, 15, 20, 20);
  }

}

class Dog extends CyberPet {
  constructor(petName, age, hunger, thirst, happiness, tiredness) {
    super(petName, age, hunger, thirst, happiness, tiredness);
  }

  fetch(){
    this.updateStats(5, 5, 5, 20);
  
  }

  swim(){
    this.updateStats(5, -20, 10, 15);

  }

  tugOfWar(){
    this.updateStats(10, 10, 20, 25);

  }

}

class Cat extends CyberPet {
  constructor(petName, age, hunger, thirst, happiness, tiredness) {
    super(petName, age, hunger, thirst, happiness, tiredness);
  }

  stroke(){
    this.updateStats(5, 5, 30, 30);

  }

  letOut(){
    this.updateStats(10, 10, 10, 20);
    
  }

}

class Rabbit extends CyberPet {
  constructor(petName, age, hunger, thirst, happiness, tiredness) {
    super(petName, age, hunger, thirst, happiness, tiredness);
  }

  stroke(){
    this.updateStats(2, 5, 10, 10);
    
  }

  runAround(){
    this.updateStats(10, 10, 10, 20);
  
  }
}

bugs = new Rabbit("bugs", 3, 10, 10, 10, 10)
console.log(bugs.listPetStats())
bugs.stroke()
console.log(bugs.listPetStats());