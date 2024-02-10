const { UserRepository } = require("../repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser({ name, email, contact, dob, password }) {
    try {
      const user = await this.userRepository.createUser({
        name,
        email,
        contact,
        dob,
        password,
      });
      return user;
    } catch (error) {
      throw { error };
    }
  }
  async checkUser({ email, password }) {
    try {
      const user = await this.userRepository.checkUser({
        email,
        password,
      });
      return user;
    } catch (error) {
      throw { error };
    }
  }

  async updateUser({ name, email, contact, dob }) {
    try {
      const user = await this.userRepository.updateUser({
        name,
        email,
        contact,
        dob,
      });

      return user;
    } catch (error) {
      throw { error };
    }
  }
  async getUser({ email }) {
    try {
      const user = await this.userRepository.getUser({ email });

      return user;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = UserService;
