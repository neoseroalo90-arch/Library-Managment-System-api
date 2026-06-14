const bookService = require('../service/bookService');

const getBooks = (req, res) => {
  res.json(bookService.getAllBooks());
};

const getBookById = (req, res) => {
  const book = bookService.getBookById(
    req.params.id
  );

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  res.json(book);
};

const createBook = (req, res) => {
  const book =
    bookService.createBook(req.body);

  res.status(201).json(book);
};

const updateBook = (req, res) => {
  const book =
    bookService.updateBook(
      req.params.id,
      req.body
    );

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  res.json(book);
};

const deleteBook = (req, res) => {
  const deleted =
    bookService.deleteBook(
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
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};