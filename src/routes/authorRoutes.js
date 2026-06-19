const express = require('express');
const router = express.Router();

const validateAuthor =
  require('../middleware/validateAuthor');

const validateAuthorUpdate =
  require('../middleware/validateAuthorUpdate');

const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authorController');

router.get('/', getAuthors);

router.get('/:id', getAuthorById);

router.post(
  '/',
  validateAuthor,
  createAuthor
);

router.put(
  '/:id',
  validateAuthorUpdate,
  updateAuthor
);

router.delete('/:id', deleteAuthor);

module.exports = router;