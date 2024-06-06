const express = require('express');
const { check } = require('express-validator');
const { register, login, signout } = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
    check('name', 'Name is required').isLength({ min: 1 }),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], register);

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 1 })
], login);

router.get('/signout', signout);

module.exports = router;
