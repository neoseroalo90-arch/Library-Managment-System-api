const books = require('../data/books');

const getBooks = (req, res) => {
  res.status(200).json(books);
};

const getBookById = (req, res) => {
  const book = books.find(
    b => b.id === parseInt(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  res.json(book);
};

const createBook = (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    available: true
  };

  books.push(newBook);

  res.status(201).json(newBook);
};

const updateBook = (req, res) => {
  const book = books.find(
    b => b.id === parseInt(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
};

const deleteBook = (req, res) => {
  const index = books.findIndex(
    b => b.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  books.splice(index, 1);

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