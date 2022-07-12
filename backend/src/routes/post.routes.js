const express = require('express');
const router = express.Router();

const PostsController = require("../controllers/postsController")

router.get("/post/:id", PostsController.getPost);
router.post("/createpost", PostsController.createPost);

router.get("/posts", PostsController.getAllPosts);
module.exports = router;
