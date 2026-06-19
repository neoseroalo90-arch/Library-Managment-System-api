const Author = require('../models/Author');

const getAllAuthors = async () => {
  return await Author.find();
};

const getAuthorById = async (id) => {
  return await Author.findById(id);
};

const createAuthor = async (authorData) => {
  return await Author.create(authorData);
};

const updateAuthor = async (id, authorData) => {
  return await Author.findByIdAndUpdate(
    id,
    authorData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteAuthor = async (id) => {
  return await Author.findByIdAndDelete(id);
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
};