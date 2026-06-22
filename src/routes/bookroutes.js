const express = require('express');
const router = express.Router();

const validateBook = require('../middleware/validateBook');
const authMiddleware = require('../middleware/authMiddleware');

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

// Public routes
router.get('/', getBooks);
router.get('/:id', getBookById);

// Protected routes
router.post(
  '/',
  authMiddleware,
  validateBook,
  createBook
);

router.put(
  '/:id',
  authMiddleware,
  validateBook,
  updateBook
);

router.delete(
  '/:id',
  authMiddleware,
  deleteBook
);

module.exports = router;