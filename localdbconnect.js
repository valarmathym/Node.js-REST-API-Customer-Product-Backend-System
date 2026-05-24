const mongoose = require('mongoose');

// Connect to the local MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/sales', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
