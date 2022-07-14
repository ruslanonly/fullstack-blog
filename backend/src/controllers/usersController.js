const db = require("../database/db");

const UsersService = require("../services/usersService");

class UsersController {
  async getUser(req, res) {
    let userId = req.params.id;
    let user = await UsersService.getUser(userId);
    res.json(user);
  }

  async getUsers(req, res) {
    let users = await UsersService.getUsers();
    res.json(users);
  }

  async createUser(req, res) {
    let {username, email} = req.body;
    let newUser = await UsersService.createUser(username, email);
    res.json(newUser);
  }

  async updateUser(req, res) {

  }

  async deleteUser(req, res) {

  }
}

module.exports = new UsersController();



