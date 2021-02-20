// Ex5.2 - String Repeat
const repeat_str = (n,str) => str.repeat(n);

console.log(repeat_str(5,` [̲̅$̲̅(̲̅5̲̅)̲̅$̲̅] `));

const repeat_str_with_iteration = (n,str) => {
  const newStr = str;
  for (let i = 1; i<n;i++) {
    str += newStr;
  } return str;
}

console.log(repeat_str_with_iteration(5,` [̲̅$̲̅(̲̅5̲̅)̲̅$̲̅] `));