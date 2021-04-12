const fs = require('fs');
const uniqid = require("uniqid");
const chalk = require("chalk");
const { underline } = require('chalk');

const readUsers = () => {
  try{
    const usersData = fs.readFileSync("users.json").toString();
    return JSON.parse(usersData);
  } catch (error) {
    return [];
  }
};

const saveUsers = (usersData) => {
  const data = JSON.stringify(usersData);
  fs.writeFileSync('users.json', data);
}


const createUser = (name, email) => {
  const users = readUsers();
  const newUser = {
    name,
    email,
    id: uniqid(),
  };
  users.push(newUser);
  saveUsers(users);
  console.log(chalk.green("\n", "User of " + name + " created!"));
};

const readUser = (id) => {
  const users = readUsers();
  const user = users.find(user => user.id === id);
  if (user) return console.log('\n', chalk.green(`Name: ${user.name} | Email: ${user.email}`));
  else return console.log("\n", chalk.red('User not found'));
};

const updateUser = (id, newData) => {
  const users = readUsers();
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    if (newData.name) {
      users[index].name = newData.name;
    } else if (newData.email) {
      users[index].email = newData.email;
    }
    saveUsers(users);
    return newData.name || newData.email ?
    console.log("\n", chalk.green('User Updated!'))
    :
    console.log('\n', chalk.red('Nothing to update...'))
  }
  return console.log('\n', chalk.red('User not found'));
};

const deleteUser = (id) => {
  const users = readUsers();
  const newUsersData = users.filter(user => user.id !== id);
  if (users.length !== newUsersData.length) {
    saveUsers(newUsersData);
    return console.log("\n", chalk.green("User Deleted!"));
  }
  return console.log("\n", chalk.red("User Not Found!"));
};

const listUsers = () => {
  const users = readUsers();
  console.log('\n');
  users.forEach(user => {
    console.log(
      chalk.green.bold(
        "Name:",
        chalk.reset(user.name + " |"),
        chalk.green.bold("Email:"),
        chalk.reset(user.email + " |"),
        chalk.green.bold("ID:"),
        chalk.reset(user.id)
      )
    );
  })
}

module.exports = {
  readUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
  listUsers,
};