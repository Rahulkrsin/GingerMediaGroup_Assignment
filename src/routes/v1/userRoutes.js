const express = require("express");
const { UserController } = require("../../controllers");
const userRouter = express.Router();

const userController = new UserController();
userRouter.post("/", userController.get);
userRouter.post("/register", userController.create);
userRouter.post("/login", userController.login);
userRouter.patch("/", userController.update);

module.exports = userRouter;
