const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');

const port = 3000;
const app = express();

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database');
  })
  .catch((err) => {
    console.log('Not connected to database', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Routes
const route = require('./server');
app.use('/', route);

app.listen(port, () => {
  console.log(`Application is listening at http://localhost:${port}`);
});
