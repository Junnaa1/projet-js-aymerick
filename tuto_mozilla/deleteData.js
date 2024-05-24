const mongoose = require('mongoose');
const Book = require('./models/book'); 
const Author = require('./models/author'); 


mongoose.connect('mongodb://127.0.0.1:27017/licence', { useNewUrlParser: true, useUnifiedTopology: true }) // Update with your connection string
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Delete all documents in the collections
async function clearData() {
  await Book.deleteMany({});
  console.log('All books deleted.');

  await Author.deleteMany({});
  console.log('All authors deleted.');

  // Close the connection
  mongoose.connection.close();
}

clearData();