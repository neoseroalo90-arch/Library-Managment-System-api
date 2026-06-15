const loans = require('../data/loans');

const getAllLoans = () => loans;

const getLoanById = (id) => {
  return loans.find(
    loan => loan.id === parseInt(id)
  );
};

const createLoan = (loanData) => {
  const newLoan = {
    id: loans.length + 1,
    memberId: loanData.memberId,
    bookId: loanData.bookId,
    loanDate: loanData.loanDate,
    returnDate:
      loanData.returnDate || null,
    returned:
      loanData.returned || false
  };

  loans.push(newLoan);

  return newLoan;
};

const updateLoan = (id, loanData) => {
  const loan = loans.find(
    loan => loan.id === parseInt(id)
  );

  if (!loan) {
    return null;
  }

  loan.memberId =
    loanData.memberId ||
    loan.memberId;

  loan.bookId =
    loanData.bookId ||
    loan.bookId;

  loan.loanDate =
    loanData.loanDate ||
    loan.loanDate;

  loan.returnDate =
    loanData.returnDate !== undefined
      ? loanData.returnDate
      : loan.returnDate;

  loan.returned =
    loanData.returned !== undefined
      ? loanData.returned
      : loan.returned;

  return loan;
};

const deleteLoan = (id) => {
  const index = loans.findIndex(
    loan => loan.id === parseInt(id)
  );

  if (index === -1) {
    return false;
  }

  loans.splice(index, 1);

  return true;
};

module.exports = {
  getAllLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan
};