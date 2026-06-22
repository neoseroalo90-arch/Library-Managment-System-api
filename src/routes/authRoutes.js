const express = require('express');

const router = express.Router();

const validateUser =
  require('../middleware/validateUser');

const {
  register,
  login
} = require('../controllers/authController');

router.post(
  '/register',
  validateUser,
  register
);

router.post(
  '/login',
  login
);

module.exports = router;