const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reservation',
});

const getListingById = (id, callback) => {
  db.connect();
  db.query('SELECT * FROM listing WHERE id = ?', id, (err, result) => {
    if (err) console.log(err);
    callback(err, result);
  });
  db.end();
};

module.exports = { getListingById };
