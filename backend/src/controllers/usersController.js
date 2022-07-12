const db = require("../database/db");

class UsersController {
  async getUser(req, res) {
    let userId = req.params.id;
    let q_res = await db.query("SELECT * FROM users WHERE id = $1", [userId]);
    let user = q_res.rows[0];
    res.json(user);
  }

  async getUsers(req, res) {
    let q_res = await db.query("SELECT * FROM users");
    let users = q_res.rows;
    res.json(users);
  }

  async createUser(req, res) {
    let {username, email} = req.body;
    let q_res = await db.query("INSERT INTO users (username, email) VALUES ($1, $2);", [username, email]);
    let newUser = q_res.rows[0];
    res.json(newUser);
  }
}

module.exports = new UsersController();



