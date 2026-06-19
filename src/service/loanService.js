const Loan = require('../models/Loan');

const getAllLoans = async () => {
  return await Loan.find()
    .populate('memberId')
    .populate('bookId');
};

const getLoanById = async (id) => {
  return await Loan.findById(id)
    .populate('memberId')
    .populate('bookId');
};

const createLoan = async (loanData) => {
  return await Loan.create(loanData);
};

const updateLoan = async (id, loanData) => {
  return await Loan.findByIdAndUpdate(
    id,
    loanData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteLoan = async (id) => {
  return await Loan.findByIdAndDelete(id);
};

module.exports = {
  getAllLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan
};