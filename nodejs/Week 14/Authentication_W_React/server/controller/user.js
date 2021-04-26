const User = require('../model/user');

const loginUser = async (req,res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({user, token});
  } catch(e) {
    res.status(400).send(e.message);
  }
}

const signupUser = async (req,res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch(e) {
    res.status(400).send(e)
  }
}

const userDetails = async (req, res) => {
  try {
    res.send(req.user);
  } catch(e) {
    res.status(400).send(e);
  }
}

const addItem = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.shoppingList = user.shoppingList.concat(req.body);
    await user.save();
    res.send(user.shoppingList);
  } catch(e) {
    res.send(400).send(e);
  }
}

const deleteItem = async (req, res) => {
  try {
    req.user.shoppingList = req.user.shoppingList.filter(item => {
      return item._id.toString() !== req.body._id;
    });
    req.user.save();
    res.send(req.user.shoppingList);
  } catch(e) {
    res.send(400).send(e);
  }
}

module.exports = { loginUser, signupUser, userDetails, addItem, deleteItem };