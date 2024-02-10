const { UserService } = require("../services");

const userService = new UserService();

class UserController {
  async create(req, res) {
    console.log(req.body);
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({
        data: user,
        message: "sucessfully created the user",
        success: true,
        error: {},
      });
    } catch (error) {
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }

  async login(req, res) {
    try {
      const user = await userService.checkUser(req.body);
      res.status(200).json({
        data: user,
        message: "sucessfully login the user",
        success: true,
        error: {},
      });
    } catch (error) {
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error,
      });
    }
  }

  async get(req, res) {
    try {
      const user = await userService.getUser(req.body);

      res.status(200).json({
        data: user,
        message: "sucessfully fetched the user",
        success: true,
        error: {},
      });
    } catch (error) {
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: {},
      });
    }
  }

  async update(req, res) {
    try {
      const user = await userService.updateUser(req.body);
      res.status(201).json({
        data: user,
        message: "sucessfully updated the user",
        success: true,
        error: {},
      });
    } catch (error) {
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }
}

module.exports = UserController;
