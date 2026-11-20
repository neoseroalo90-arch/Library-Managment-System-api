const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Duplicate key error (unique fields)
  if (err.code === 11000) {
    return res.status(409).json({
      message: 'Duplicate value already exists',
      field: Object.keys(err.keyValue)[0],
      value: Object.values(err.keyValue)[0]
    });
  }

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: Object.values(err.errors)
        .map(error => error.message)
        .join(', ')
    });
  }

  // Invalid MongoDB ObjectId
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Invalid ID format'
    });
  }

  res.status(500).json({
    message: err.message || 'Internal Server Error'
  });
};

module.exports = errorHandler;