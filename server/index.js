const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = '5001';
const db = require('./database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:1314");
  next();
});

app.get('/api/reservation/search', (req, res) => {
  db.getListingById(req.query.id, (err, result) => {
    if (err) console.log(err);
    db.getBookingById(req.query.id, (errB, resultB) => {
      if (errB) console.log(errB);
      res.send({ listing: result, booking: resultB });
    });
  });
});

app.get('/', (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
