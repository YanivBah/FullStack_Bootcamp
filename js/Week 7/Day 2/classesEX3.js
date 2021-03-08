class sortNumber {
  constructor() {
    this.numList = [];
  }

  addNum(num) {
    if(this.numList.indexOf(num) === -1) {
      let isPrime = true;
    if (num === 1) {
      isPrime = false;
    } else if (num === 2) {
        isPrime = true;
    } else {
      for (let x = 2; x < num; x++) {
        if (num % x === 0) {
          isPrime = false;
        }
      }
      }
      isPrime ? this.numList.push(num) : '';
      this.numList.sort((a,b) => a - b);
      return console.log(isPrime);
    }
  }

  removeNum(num) {
    const index = this.numList.indexOf(num);
    this.numList.slice(index,1);
  }

  getAll() {
    return this.numList
  }

  print() {
    console.log(`${this.numList}`);
  }
  share(obj) {
    let counter = 0;
    obj.numList.forEach(num => this.numList.indexOf(num) !== -1 ? counter++ : '');
    return console.log(`There is ${counter} numbers in common`);
  }
  union(obj) {
    const newArr = [...obj.numList];
    this.numList.forEach(num => {
      newArr.indexOf(num) === -1 ? newArr.push(num) : '';
    })
    return newArr.sort((a,b) => a - b);
  }
}

const numbers = new sortNumber();
numbers.addNum(2);
numbers.addNum(5);
numbers.addNum(5);
numbers.addNum(7);

const numbers2 = new sortNumber();
numbers2.addNum(7);
numbers2.addNum(13);

numbers.share(numbers2);

console.log(numbers.union(numbers2));