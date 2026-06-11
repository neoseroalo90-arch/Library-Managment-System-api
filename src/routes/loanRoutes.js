const express = require('express');
const router = express.Router();
const validateLoan = require('../middleware/validateLoan');

const {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan
} = require('../controllers/loanController');

router.get('/', getLoans);
router.get('/:id', getLoanById);
router.post('/', validateLoan, createLoan);
router.put('/:id', validateLoan, updateLoan);
router.delete('/:id', deleteLoan);

module.exports = router;