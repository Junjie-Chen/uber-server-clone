const mongoose = require('mongoose');

let connection;

before(done => {
  mongoose.connect('mongodb://localhost/uber_server_clone_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  connection = mongoose.connection;

  connection.once('open', () => done())
    .on('error', console.error.bind(console, 'connection error:'));
});
