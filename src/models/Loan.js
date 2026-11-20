const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
      required: true
    },

    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true
    },

    loanDate: {
      type: Date,
      default: Date.now
    },

    returnDate: {
      type: Date,
      default: null
    },

    returned: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Loan', loanSchema);