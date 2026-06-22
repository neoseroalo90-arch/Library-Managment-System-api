const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const validateLoan = require('../middleware/validateLoan');

const {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan
} = require('../controllers/loanController');

// Public routes
router.get('/', getLoans);
router.get('/:id', getLoanById);

// Protected routes
router.post(
  '/',
  authMiddleware,
  validateLoan,
  createLoan
);

router.put(
  '/:id',
  authMiddleware,
  updateLoan
);

router.delete(
  '/:id',
  authMiddleware,
  deleteLoan
);

module.exports = router;