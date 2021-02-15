const isString = function(string, callBack) {
  return callBack(string) === 'string'
}

const whatType = (x) => typeof x;

console.log(isString('Hello', whatType));


const firstWordUpperCase = function(string, callBack) {
  const strSplit = string.split(' ')[0];
  return callBack(strSplit.toUpperCase() + string.slice(strSplit.length));
}

const dashes = function(string) {
  return string.split(' ').join('-');
}

console.log(firstWordUpperCase('how are you man?', dashes));