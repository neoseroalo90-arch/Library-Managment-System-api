const loanService = require('../service/loanService');

const getLoans = async (req, res, next) => {
  try {
    const loans =
      await loanService.getAllLoans();

    res.json(loans);
  } catch (error) {
    next(error);
  }
};

const getLoanById = async (
  req,
  res,
  next
) => {
  try {
    const loan =
      await loanService.getLoanById(
        req.params.id
      );

    if (!loan) {
      return res.status(404).json({
        message: 'Loan not found'
      });
    }

    res.json(loan);
  } catch (error) {
    next(error);
  }
};

const createLoan = async (
  req,
  res,
  next
) => {
  try {
    const loan =
      await loanService.createLoan(
        req.body
      );

    res.status(201).json(loan);
  } catch (error) {
    next(error);
  }
};

const updateLoan = async (
  req,
  res,
  next
) => {
  try {
    const loan =
      await loanService.updateLoan(
        req.params.id,
        req.body
      );

    if (!loan) {
      return res.status(404).json({
        message: 'Loan not found'
      });
    }

    res.json(loan);
  } catch (error) {
    next(error);
  }
};

const deleteLoan = async (
  req,
  res,
  next
) => {
  try {
    const deleted =
      await loanService.deleteLoan(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        message: 'Loan not found'
      });
    }

    res.json({
      message: 'Loan deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan
};