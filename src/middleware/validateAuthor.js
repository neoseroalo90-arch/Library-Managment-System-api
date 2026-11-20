const validateAuthor = (req, res, next) => {
  const { name, nationality } = req.body;

  if (!name && !nationality) {
    return res.status(400).json({
      message:
        'Provide at least a name or nationality to update'
    });
  }

  next();
};

module.exports = validateAuthor;