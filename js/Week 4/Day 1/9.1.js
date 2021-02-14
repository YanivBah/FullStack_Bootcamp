const isString = function(string, callBack) {
  return callBack(string) === 'string'
}

const whatType = (x) => typeof x;

console.log(isString('Hello', whatType));


const firstWordUpperCase = function(string, callBack) {
  return callBack(string.charAt(0).toUpperCase() + string.slice(1));
}

const dashes = function(string) {
  return string.split(' ').join('-');
}

console.log(firstWordUpperCase('what the hell?', dashes));