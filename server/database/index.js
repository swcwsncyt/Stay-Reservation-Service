const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reservation',
});

db.connect();

const getListingById = (id, callback) => {
  db.query('SELECT * FROM listing WHERE id = ?', id, (err, result) => {
    if (err) console.log(err);
    callback(err, result);
  });
};

const getBookingById = (id, callback) => {
  db.query('SELECT * FROM booking WHERE listing_id = ?', id, (err, result) => {
    if (err) console.log(err);
    callback(err, result);
  });
};
module.exports = { getListingById, getBookingById };
