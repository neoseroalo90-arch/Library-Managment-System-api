const express = require('express');
const router = express.Router();

const validateBook =
  require('../middleware/validateBook');

const validateBookUpdate =
  require('../middleware/validateBookUpdate');

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

router.get('/', getBooks);

router.get('/:id', getBookById);

router.post(
  '/',
  validateBook,
  createBook
);

router.put(
  '/:id',
  validateBookUpdate,
  updateBook
);

router.delete('/:id', deleteBook);

module.exports = router;