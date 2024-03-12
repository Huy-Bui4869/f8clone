// viết các hàm làm việc với Model
const UserRepository = require("../repositories/user.repositories");

const userRepository = new UserRepository();

module.exports = {
  createUser: () => {
    // Gọi model user
  },
  login: () => {
    // Gọi model user
  },
  getUsers() {
    return userRepository.getLastestUser();
  },
};
