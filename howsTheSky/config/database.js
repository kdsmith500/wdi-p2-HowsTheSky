var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// mongoose.connect('mongodb://localhost/users',
//   { useNewUrlParser: true }
// );

// shortcut to mongoose.connection object
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
  });

// var db = mongoose.connection;

// db.on('connected', function () {
//   console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });

module.exports = mongoose;