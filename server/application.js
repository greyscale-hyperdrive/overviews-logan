const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public/index.html')));
app.use('/overviewsBundle.js', express.static(path.join(__dirname, '../public/dist/bundle.js')));
app.use('/images/star-rating.png', express.static(path.join(__dirname, '../public/images/star-rating.png')));

app.get('/overviews/restaurant/:restaurantId/overview', (req, res) => {
  db.retrieve(req.params.restaurantId, (err, results) => {
    if (err && err.message.includes('Cast to number failed for value "NaN"')) {
      res.status(400).json('Bad request');
    } else if (err) {
      res.status(500).json('Unable to retrieve overview data from database');
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = app;
