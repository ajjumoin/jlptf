const express = require('express');

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();


router.post("/signup", UserController.createUser);
router.post("/login", UserController.userLogin);
router.put('/reset',checkAuth,UserController.updateUser);

module.exports = router;