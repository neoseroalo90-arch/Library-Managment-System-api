const bookService = require('../service/bookService');

const getBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(
      req.params.id
    );

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.json(book);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const book =
      await bookService.createBook(req.body);

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const book =
      await bookService.updateBook(
        req.params.id,
        req.body
      );

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.json(book);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const deleted =
      await bookService.deleteBook(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.json({
      message: 'Book deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};