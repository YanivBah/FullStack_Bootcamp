let array = [];

function sevenBoom (n) {
  for (let x = 1, y = 0; x <= n; x++ && y++) {
    array.push(x);
    if (array[y] % 7 === 0 && x.toString().includes('7')) {
      array.pop();
      array.push(`BOOM-BOOM`);
    } else if (array[y] % 7 === 0) {
      array.pop();
      array.push(`BOOM`);
    }
}};

sevenBoom(18);

console.log(array);

console.table(array);