
const yargs = require('yargs');
const chalk = require("chalk");

const {
  readUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
  listUsers,
} = require("./funcs.js");

yargs.command({
  command: "create",
  describe: chalk.blue.inverse("Create New User\n"),
  builder: {
    name: {
      describe: "Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "E-mail",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ name, email }) => createUser(name, email),
});

yargs.command({
  command: "read",
  describe: chalk.green.inverse("Read Existing User\n"),
  builder: {
    id: {
      describe: "User ID",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ id }) => readUser(id),
});

yargs.command({
  command: "update",
  describe: chalk.yellow.inverse("Update Existing User\n"),
  builder: {
    id: {
      describe: "User ID",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "Name",
      type: "string",
    },
    email: {
      describe: "Email",
      type: "string",
    },
  },
  handler: ({ id, name = null, email = null }) => {
    const newData = {name, email};
    updateUser(id, newData);
  },
});

yargs.command({
  command: "delete",
  describe: chalk.red.inverse("Delete Existing User\n"),
  builder: {
    id: {
      describe: "User ID",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ id }) => deleteUser(id),
});

yargs.command({
  command: "list",
  describe: chalk.cyan.inverse("List All Existing User\n"),
  handler: () => listUsers(),
});

yargs.parse();