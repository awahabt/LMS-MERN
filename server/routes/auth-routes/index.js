const express = require("express");
const { registerUser } = require("../../controllers/auth-controller");

const express = express.Router();

router.post("/register", registerUser);
