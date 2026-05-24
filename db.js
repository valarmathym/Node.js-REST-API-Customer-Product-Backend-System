const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://valarmathym:XtaDN3jvFmHGKDAC@cluster0.s4t3g1e.mongodb.net/Diploma2025',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error(error);
  });

 // mongoose.connect('mongodb+srv://Taf2016:bNaYJ3j4tJL6bTw3@cluster0.meg4e6y.mongodb.net/DIPPROJECT3',
  //  { useNewUrlParser: true, useUnifiedTopology: true })