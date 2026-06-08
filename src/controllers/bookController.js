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

module.exports = {
  getBooks,
  getBookById
};