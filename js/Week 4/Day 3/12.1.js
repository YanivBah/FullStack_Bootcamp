const arr = [5,10,15,20,25,30];

const max = (acc, cur) => Math.max(acc, cur);
arr.reduce(max,0);

const sumOfEvenNum = (acc, cur) => cur %2 === 0 ? acc + cur : acc;
arr.reduce(sumOfEvenNum,0);

const average = arr.reduce((acc,cur) => acc+cur) / arr.length