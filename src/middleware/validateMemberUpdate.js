const validateMemberUpdate = (
  req,
  res,
  next
) => {
  const { name, email } = req.body;

  if (!name && !email) {
    return res.status(400).json({
      message:
        'Provide at least a name or email to update'
    });
  }

  next();
};

module.exports = validateMemberUpdate;