// db.js
const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/campus360'; // Use 'campus360' as the database name

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  });

