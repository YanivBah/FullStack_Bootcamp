const yargs = require('yargs');

yargs.command({
  command: "add",
  describe: "Adding two numbers",
  builder: {
    num1: {
      describe: "Number 1",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Number 2",
      demandOption: true,
      type: "number",
    },
  },
  handler: ({num1,num2}) => console.log(num1 + num2)
});

yargs.command({
  command: "sub",
  describe: "Subtract two numbers",
  builder: {
    num1: {
      describe: "Number 1",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Number 2",
      demandOption: true,
      type: "number",
    },
  },
  handler: ({ num1, num2 }) => console.log(num1 - num2),
});

yargs.command({
  command: "mult",
  describe: "Mult two numbers",
  builder: {
    num1: {
      describe: "Number 1",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Number 2",
      demandOption: true,
      type: "number",
    },
  },
  handler: ({ num1, num2 }) => console.log(num1 * num2),
});

yargs.command({
  command: "pow",
  describe: "Pow number",
  builder: {
    num1: {
      describe: "Number 1",
      demandOption: true,
      type: "number",
    },
  },
  handler: ({ num1 }) => console.log(Math.pow(num1,2)),
});

yargs.parse();