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
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/api/reservation/search/:id', (req, res) => {
  db.getListingById(req.params.id, (err, result) => {
    if (err) console.log(err);
    db.getBookingById(req.params.id, (errB, resultB) => {
      if (errB) console.log(errB);
      res.send({ listing: result, booking: resultB });
    });
  });
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
