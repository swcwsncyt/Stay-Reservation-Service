const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const port = '1314';
const db = require('./database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/dist')));

app.post('/api/reservation/search', (req, res) => {
  db.getListingById(req.query.id, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.get('/api/reservation', (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
