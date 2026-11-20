const validateAuthorUpdate = (
  req,
  res,
  next
) => {
  const { name, nationality } = req.body;

  if (!name && !nationality) {
    return res.status(400).json({
      message:
        'Provide at least one field to update'
    });
  }

  next();
};

module.exports = validateAuthorUpdate;