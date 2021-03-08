class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  addToX(x) {
    this.x += x;
  }
  addToY(y) {
    this.y += y;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  addPoint(obj) {
    this.addToX(obj.x);
    this.addToY(obj.y);
  }
  isSame(obj) {
    return this.x === obj.x && this.y === obj.y ? true : false;
  }
  print() {
    console.log(`X: ${this.x} - Y: ${this.y}`);
  }
}

class PointWorld {
  constructor() {
    this.list = [];
  }
  sortList() {
    return this.list.sort((a,b) => b.y - a.y);
  }

  isUnique() {
    const uniqueArr = [];
    this.list.forEach(point => {
      if (!uniqueArr.find((point2) => point2.isSame(point))) {
        uniqueArr.push(point);
    }})
    return uniqueArr;
  }
  
  sumOfX() {
    let sum = 0;
    this.list.forEach(list => sum += list.x);
    return sum;
  }
  pointExist(point) {
    return this.list.indexOf(point) !== -1 ? true : false;
  }
}

const point1 = new Point(1,2);
const point2 = new Point(3,4);
const point3 = new Point(5,6);
const point4 = new Point(3,4);

const newPointWorld = new PointWorld();
newPointWorld.list = [point1,point2,point3,point4];

console.log(newPointWorld.isUnique());