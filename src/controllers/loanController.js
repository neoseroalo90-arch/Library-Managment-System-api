const loans = require('../data/loans');

// GET all loans
const getLoans = (req, res) => {
  res.json(loans);
};

// GET loan by ID
const getLoanById = (req, res) => {
  const loan = loans.find(
    loan => loan.id === parseInt(req.params.id)
  );

  if (!loan) {
    return res.status(404).json({
      message: 'Loan not found'
    });
  }

  res.json(loan);
};

// POST create new loan
const createLoan = (req, res) => {
  const newLoan = {
    id: loans.length + 1,
    memberId: req.body.memberId,
    bookId: req.body.bookId,
    loanDate: req.body.loanDate,
    returnDate: req.body.returnDate || null,
    returned: req.body.returned || false
  };

  loans.push(newLoan);

  res.status(201).json(newLoan);
};

// PUT update loan
const updateLoan = (req, res) => {
  const loan = loans.find(
    loan => loan.id === parseInt(req.params.id)
  );

  if (!loan) {
    return res.status(404).json({
      message: 'Loan not found'
    });
  }

  loan.memberId = req.body.memberId || loan.memberId;
  loan.bookId = req.body.bookId || loan.bookId;
  loan.loanDate = req.body.loanDate || loan.loanDate;
  loan.returnDate =
    req.body.returnDate !== undefined
      ? req.body.returnDate
      : loan.returnDate;
  loan.returned =
    req.body.returned !== undefined
      ? req.body.returned
      : loan.returned;

  res.json(loan);
};

// DELETE loan
const deleteLoan = (req, res) => {
  const index = loans.findIndex(
    loan => loan.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Loan not found'
    });
  }

  loans.splice(index, 1);

  res.json({
    message: 'Loan deleted successfully'
  });
};

module.exports = {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan
}; 