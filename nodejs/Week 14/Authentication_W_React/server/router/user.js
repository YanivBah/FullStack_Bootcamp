const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const { loginUser, signupUser, userDetails, addItem } = require("../controller/user");

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.patch("/add", auth, addItem);
router.get("/profile", auth, userDetails);

module.exports = router;