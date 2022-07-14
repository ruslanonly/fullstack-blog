const db = require("../database/db");

class UsersService {
  async getUser(userId) {
    let q_res = await db.query("SELECT * FROM users WHERE id=$1", [userId]);
    let user = q_res.rows[0];
    return user;
  }

  async getUsers() {
    let q_res = await db.query("SELECT * FROM users");
    let users = q_res.rows;
    return users;
  }

  async createUser(username, email) {
    console.log("username " + username + "email " + email)
    let q_res = await db.query("INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *;", [username, email]);
    let newUser = q_res.rows[0];
    return newUser
  }

  async updateUser() {

  }

  async deleteUser() {

  }
}

module.exports = new UsersService();

