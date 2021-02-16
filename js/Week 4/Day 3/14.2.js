function findSmallest(a, b, c){
  if (a > c && b > c){
    return c;
  } else if (b > a && c > a) {
    return a;
  } else {
    return b;
  }
}

console.log(findSmallest(52,66, 2));