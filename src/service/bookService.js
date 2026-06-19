const Book = require('../models/Book');

const getAllBooks = async () => {
  return await Book.find();
};

const getBookById = async (id) => {
  return await Book.findById(id);
};

const createBook = async (bookData) => {
  return await Book.create(bookData);
};

const updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(
    id,
    bookData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};