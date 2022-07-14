const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController');

router.get("/users", UsersController.getUsers)
router.get("/user/:id", UsersController.getUser)
router.post("/createuser", UsersController.createUser)
router.post("/update/use", UsersController.updateUser)
router.delete("/delete/user", UsersController.deleteUser)

module.exports = router;