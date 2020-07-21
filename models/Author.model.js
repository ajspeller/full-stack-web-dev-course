const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Author', AuthorSchema);
