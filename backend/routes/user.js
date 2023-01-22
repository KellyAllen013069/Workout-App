const express = require('express');

//controller functions
const {loginUser, signupUser} = require('../controllers/userController');

const router = express.Router();

//login route
router.post('/login', loginUser);


router.post('/signup', signupUser);

//signup route

module.exports = router