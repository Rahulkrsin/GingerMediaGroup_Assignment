const { Op } = require("sequelize");
const { User } = require("../models/index");

class UserRepository {
  async createUser({ name, email, contact, dob, password }) {
    try {
      const user = await User.create({ name, email, contact, dob, password });
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async checkUser({ email, password }) {
    const data = isNaN(email) ? email : null;
    console.log(data);
    try {
      if (data) {
        var user = await User.findOne({
          where: {
            email: email,
          },
        });
      } else {
        var user = await User.findOne({
          where: {
            contact: email,
          },
        });
      }

      if (user) {
        console.log(user.dataValues);
        console.log(user.dataValues.password == password);
        if (user.dataValues.password == password) {
          return user.dataValues;
        } else {
          throw "user not valid";
        }
      } else {
        throw "user not valid";
      }
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async updateUser({ name, email, contact, dob }) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      user.name = name;
      user.contact = contact;
      user.dob = dob;
      await user.save();

      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async getUser({ email }) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      return user;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = UserRepository;
