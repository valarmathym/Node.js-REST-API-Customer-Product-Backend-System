const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
 // we will test this later _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  }
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;