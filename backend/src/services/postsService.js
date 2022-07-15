const db = require("../database/db");

class PostsService {
  async getPost(postId) {
    let q_res = await db.query("SELECT * FROM posts where id = $1", [postId]);
    let post = q_res.rows[0];
    return post;
  }
  
  async createPost(post) {
    let { title, content, user_id, username} = post;  
    let q_res = await db.query("INSERT INTO posts(title, content, user_id, author, data_created) VALUES($1, $2, $3, $4, NOW()) RETURNING *;", [title, content, user_id, username]);
    let newPost = q_res.rows[0];
    return newPost;
  }
  
  async updatePost() {
    
  }
  
  async getAllPosts() {
    let q_res = await db.query("SELECT * FROM posts");
    let posts = q_res.rows;
    return posts;
  }

  async getPostUserJoin(postId) {
    let q_res = await db.query("SELECT posts.title, posts.content, posts.data_created, posts.likes, users.username as author FROM posts INNER JOIN users ON posts.user_id=users.id WHERE posts.id = $1;", [postId]);
    let post = q_res.rows[0];
    return post;
  }
}

module.exports = new PostsService();

