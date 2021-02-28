function Square(a, b, c, d){
this.a = a;
this.b = b;
this.c = c;
this.d = d;
}

Square.prototype.isSquare = function () {
  return this.a === this.b && this.b === this.c && this.c === this.d ? true : false;
}

const sqaure1 = new Square(10,10,10,10);
console.log(sqaure1.isSquare());
const sqaure2 = new Square(10,20,10,10);
console.log(sqaure2.isSquare());