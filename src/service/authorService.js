const authors = require('../data/authors');

const getAllAuthors = () => authors;

const getAuthorById = (id) => {
  return authors.find(
    author => author.id === parseInt(id)
  );
};

const createAuthor = (authorData) => {
  const newAuthor = {
    id: authors.length + 1,
    name: authorData.name
  };

  authors.push(newAuthor);

  return newAuthor;
};

const updateAuthor = (id, authorData) => {
  const author = authors.find(
    author => author.id === parseInt(id)
  );

  if (!author) {
    return null;
  }

  author.name =
    authorData.name || author.name;

  return author;
};

const deleteAuthor = (id) => {
  const index = authors.findIndex(
    author => author.id === parseInt(id)
  );

  if (index === -1) {
    return false;
  }

  authors.splice(index, 1);

  return true;
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
};