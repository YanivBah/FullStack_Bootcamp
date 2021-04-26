const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const { loginUser, signupUser, userDetails, addItem, deleteItem } = require("../controller/user");

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.patch("/add", auth, addItem);
router.patch("/delete", auth, deleteItem);
router.get("/profile", auth, userDetails);

module.exports = router;