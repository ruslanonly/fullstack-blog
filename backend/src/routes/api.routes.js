const express = require('express');
const router = express.Router();

const postRouter = require("./post.routes");
const userRouter = require("./user.routes");

router.use("/api", [postRouter, userRouter]);

module.exports = router;