const validateLoanUpdate = (
  req,
  res,
  next
) => {
  const {
    memberId,
    bookId,
    returnDate,
    returned
  } = req.body;

  if (
    memberId === undefined &&
    bookId === undefined &&
    returnDate === undefined &&
    returned === undefined
  ) {
    return res.status(400).json({
      message:
        'Provide at least one field to update'
    });
  }

  next();
};

module.exports = validateLoanUpdate;