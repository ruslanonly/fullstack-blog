const db = require("../database/db");

class postController {
  async getPost(req, res, next) {
    let postId = req.params.id;
    let q_res = await db.query("SELECT * FROM posts where id = $1", [postId]);
    let post = q_res.rows[0];
    res.json(post);
  }
  
  async createPost(req, res, next) {
    let { title, content, user_id, username} = req.body;  
    console.log(title, content, user_id, username);
    let q_res = await db.query("INSERT INTO posts(title, content, user_id, author, data_created) VALUES($1, $2, $3, $4, NOW()) RETURNING *", [title, content, user_id, username]);
    res.json(q_res.rows[0]);
  }
  
  async updatePost(req, res, next) {
    
  }
  
  async getAllPosts(req, res, next) {
    let q_res = await db.query("SELECT * FROM posts");
    let posts = q_res.rows;
    res.json(posts);
  }
}



module.exports = new postController();



