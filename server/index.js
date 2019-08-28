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
  db.getListingById(req.body.id, (err, result) => {
    if (err) console.log(err);
    db.getBookingById(req.body.id, (errB, resultB) => {
      if (errB) console.log(errB);
      res.send({ listing: result, booking: resultB });
    });
  });
});

app.get('/api/reservation', (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
