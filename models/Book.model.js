const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', BookSchema);
