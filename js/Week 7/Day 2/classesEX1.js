class Animal {
  constructor(name,sound) {
    this.name = name;
    this.sound = sound;
  };

  getName() {
    return this.name;
  }
  getSound() {
    return this.sound;
  }
  print() {
    return `Name: ${this.getName()} | Sound: ${this.getSound()}`
  }
}

const dog = new Animal('Dog','Woof');
const cat = new Animal('Cat','Meow');
const pig = new Animal('Pig','Oink');