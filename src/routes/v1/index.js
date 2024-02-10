const express = require("express");
const cityRouter = require("./cityRoutes");
const airportRouter = require("./airportRoutes");
const userRouter = require("./userRoutes");
const v1router = express.Router();

v1router.use("/city", cityRouter);
v1router.use("/airport", airportRouter);
v1router.use("/user", userRouter);

module.exports = v1router;
