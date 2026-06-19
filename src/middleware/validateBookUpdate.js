const validateBookUpdate = (
  req,
  res,
  next
) => {
  const { title, author } = req.body;

  if (!title && !author) {
    return res.status(400).json({
      message:
        'Provide at least a title or author to update'
    });
  }

  next();
};

module.exports = validateBookUpdate;