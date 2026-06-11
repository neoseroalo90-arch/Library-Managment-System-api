const validateAuthor = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: 'Author name is required'
    });
  }

  next();
};

module.exports = validateAuthor;