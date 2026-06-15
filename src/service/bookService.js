const books = require('../data/books');

const getAllBooks = () => {
  return books;
};

const getBookById = (id) => {
  return books.find(
    book => book.id === parseInt(id)
  );
};

const createBook = (bookData) => {
  const newBook = {
    id: books.length + 1,
    title: bookData.title,
    author: bookData.author,
    available:
      bookData.available !== undefined
        ? bookData.available
        : true
  };

  books.push(newBook);

  return newBook;
};

const updateBook = (id, bookData) => {
  const book = books.find(
    book => book.id === parseInt(id)
  );

  if (!book) {
    return null;
  }

  book.title =
    bookData.title || book.title;

  book.author =
    bookData.author || book.author;

  book.available =
    bookData.available !== undefined
      ? bookData.available
      : book.available;

  return book;
};

const deleteBook = (id) => {
  const index = books.findIndex(
    book => book.id === parseInt(id)
  );

  if (index === -1) {
    return false;
  }

  books.splice(index, 1);

  return true;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};