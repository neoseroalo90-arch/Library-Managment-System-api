const validateLoan = (req, res, next) => {
  const { memberId, bookId } = req.body;

  if (!memberId || !bookId) {
    return res.status(400).json({
      message: 'Member ID and Book ID are required'
    });
  }

  next();
};

module.exports = validateLoan;