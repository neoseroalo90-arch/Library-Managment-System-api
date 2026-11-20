const authorService = require('../service/authorService');

const getAuthors = async (req, res, next) => {
  try {
    const authors =
      await authorService.getAllAuthors();

    res.json(authors);
  } catch (error) {
    next(error);
  }
};

const getAuthorById = async (
  req,
  res,
  next
) => {
  try {
    const author =
      await authorService.getAuthorById(
        req.params.id
      );

    if (!author) {
      return res.status(404).json({
        message: 'Author not found'
      });
    }

    res.json(author);
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (
  req,
  res,
  next
) => {
  try {
    const author =
      await authorService.createAuthor(
        req.body
      );

    res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};

const updateAuthor = async (
  req,
  res,
  next
) => {
  try {
    const author =
      await authorService.updateAuthor(
        req.params.id,
        req.body
      );

    if (!author) {
      return res.status(404).json({
        message: 'Author not found'
      });
    }

    res.json(author);
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (
  req,
  res,
  next
) => {
  try {
    const deleted =
      await authorService.deleteAuthor(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        message: 'Author not found'
      });
    }

    res.json({
      message: 'Author deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
};