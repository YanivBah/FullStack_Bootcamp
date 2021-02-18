// Question 1
const printToN = (n) => {
  for (let i = 0 ; i <= n ; i++) {
    console.log(i);
  }
}

printToN(10);

// Question 2
const countX = (n,t) => {
  count = 0;
  for (let i = 1 ; i <= n ; i++) {
    if (i %t === 0) {
      count++;
    }
  }
  return count;
}

countX(10,2);

// Question 3
const countEven = (n) => {
  const arr = n.toString().split('');
  let count = 0;
  for (const number of arr) {
    if (number %2 === 0) {
      count++;
    }
  }
  return count; 
} 

countEven(1640);

// Question 4
const countEvenOnRange = (n) => {
  if (n > 111) {
    count = 0;
    for (let i = 111 ; i <= n ; i++) {
      count += countEven(i);
    }
    return count;
  }
}

countEvenOnRange(114);

// Question 5
const printReverse = () => {
  for (let i = 100 ; i >= 0 ; i -= 2) {
    console.log(i);
  }
}

printReverse();

// Question 6
const quadratic = (a,b,c) => {
  const x = Math.pow(b,2) -1 * (4 * (a) * (c));
  console.log(`x1: ${(-b + Math.sqrt(x)) / 2}`);
  console.log(`x2: ${(-b - Math.sqrt(x)) / 2}`);
}

quadratic(1,2,-3);

// Question 7
const countABC = (string) => {
  const arr = string.split('');
  const obj = {};
  arr.forEach(letter => {
    obj.hasOwnProperty(letter) ? obj[letter] += 1 : obj[letter] = 1;
  });
  console.log(obj);
}

countABC("hello");

// Question 8

const toUpper = (string) => {
  const arr = string.replace(/ /g,'-', -1).split('');
  let newArr = [];
  arr.forEach(letter => {
    letter === '-' ? newArr.push(' ') : newArr.push(String.fromCharCode(letter.charCodeAt(0) - 32))
  });
  return newArr.join('');
}

console.log(toUpper('test one two three'));

// Question 9

const checkEmail = (email) => {
  let count = 0;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email);
}
console.log(checkEmail('israel@tlv.co.il'));