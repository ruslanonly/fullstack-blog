const db = require("../database/db");

const PostsService = require("../services/postsService");

class postController {
  async getPost(req, res, next) {
    let postId = req.params.id;
    let post = await PostsService.getPost(postId);
    res.json(post);
  }
  
  async createPost(req, res, next) {
    let { title, content, user_id, username } = req.body;  
    let newPost = await PostsService.createPost({title, content, user_id, username});
    res.json(newPost);
  }
  
  async updatePost(req, res, next) {
    
  }
  
  async getAllPosts(req, res, next) {
    let posts = await PostsService.getAllPosts();
    res.json(posts);
  }

  async getPostUserJoin(req, res, next) {
    let postId = req.params.id;
    let post = await PostsService.getPostUserJoin(postId);
    res.json(post);
  }
}



module.exports = new postController();



