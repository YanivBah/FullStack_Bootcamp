const averageScore = (a, b, c) => (a + b + c) / 3;

let johnsTeam = averageScore(89, 120, 103);
let mikesTeam = averageScore(116, 94, 123);

function whoWin() {
  if (johnsTeam > mikesTeam) {
    return `John's Team is the winner!!!`;
  } else if (mikesTeam > johnsTeam) {
    return `Mike's Team is the winner!!!`;
  }
}

console.log(`John's Team average score is ${johnsTeam}.
Mike's Team average score is ${mikesTeam}.`);
console.log(whoWin());