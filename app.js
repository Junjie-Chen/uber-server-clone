const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/uber_server_clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
}

const app = express();

app.use(bodyParser.json());

routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
