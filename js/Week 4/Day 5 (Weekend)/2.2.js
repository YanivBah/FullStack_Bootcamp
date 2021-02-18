// Ex2.2 - One and Zero - Binary
const binary = (array) => {
  const str = array.join('');
  return parseInt(str, 2);
}

console.log(binary([1,1,1,1,1,0,0,1,1,0,1]));