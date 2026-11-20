const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const validateAuthor = require('../middleware/validateAuthor');

const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authorController');

// Public routes
router.get('/', getAuthors);
router.get('/:id', getAuthorById);

// Protected routes
router.post(
  '/',
  authMiddleware,
  validateAuthor,
  createAuthor
);

router.put(
  '/:id',
  authMiddleware,
  updateAuthor
);

router.delete(
  '/:id',
  authMiddleware,
  deleteAuthor
);

module.exports = router;