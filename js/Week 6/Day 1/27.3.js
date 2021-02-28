function MyArray(array){
  this.array = array;
};

MyArray.prototype.myFilter = function (callback) {
  const newArray = [];
  this.array.forEach(el => {
    const current = callback(el);
    current ? newArray.push(current) : '';
  });
  return newArray;
}

MyArray.prototype.myFind = function (callback) {
  for (let i = 0; i < this.array.length;i++) {
    const current = callback(this.array[i]);
    if (current) {
      return current;
    }
  }
}

MyArray.prototype.myReduce = function (callback, startAcc = 0) {
  let acc = startAcc;
  for (let i = 0 ; i < this.array.length ; i++) {
    const current = callback(acc,this.array[i]);
    acc = current;
  }
  return acc;
}

const arr1 = new MyArray([1,2,3,4,5,6,7,8,9,10]);

const higherThanFive = (el) => el >= 5 ? el : '';
const additionArray = (acc, el) => acc + el;

console.log(arr1.myFilter(higherThanFive));
console.log(arr1.myFind(higherThanFive));
console.log(arr1.myReduce(additionArray,0));