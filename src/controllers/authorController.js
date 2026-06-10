const authors = require('../data/authors');

const getAuthors = (req, res) => {
  res.json(authors);
};

const getAuthorById = (req, res) => {
  const author = authors.find(
    author => author.id === parseInt(req.params.id)
  );

  if (!author) {
    return res.status(404).json({
      message: 'Author not found'
    });
  }

  res.json(author);
};

const createAuthor = (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name,
    nationality: req.body.nationality
  };

  authors.push(newAuthor);

  res.status(201).json(newAuthor);
};

const updateAuthor = (req, res) => {
  const author = authors.find(
    author => author.id === parseInt(req.params.id)
  );

  if (!author) {
    return res.status(404).json({
      message: 'Author not found'
    });
  }

  author.name = req.body.name || author.name;
  author.nationality =
    req.body.nationality || author.nationality;

  res.json(author);
};

const deleteAuthor = (req, res) => {
  const index = authors.findIndex(
    author => author.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Author not found'
    });
  }

  authors.splice(index, 1);

  res.json({
    message: 'Author deleted successfully'
  });
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
};