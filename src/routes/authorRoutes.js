const express = require('express');
const router = express.Router();

const validateAuthor = require('../middleware/validateAuthor');

const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authorController');

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', validateAuthor, createAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;