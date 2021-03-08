class Car {
  constructor(brand,speed) {
    this.brand = brand;
    this.speed = speed;
  }
  getBrand() {
    return this.brand;
  }
  getSpeed() {
    return this.speed;
  }
  print() {
    return console.log(`Brand: ${this.getBrand()} | Speed: ${this.getSpeed()}`);
  }
  setSpeed(speed) {
    this.speed = speed;
  }
}

const ford = new Car('Ford',160);
const jeep = new Car('Jeep',120);
const buick = new Car('buick',180);
const chevrolet = new Car('Chevrolet',140);

const cars = [ford,jeep,buick,chevrolet];
cars.reduce((acc,cur) => acc.getSpeed() > cur.getSpeed() ? acc : cur).print();

const newArr = (arr) => arr.sort((a,b) => b.speed - a.speed);

console.log(newArr(cars));