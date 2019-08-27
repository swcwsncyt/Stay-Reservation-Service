var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reservation'
});

var getListingById = (id, callback) => {
  db.connect();
  db.query('SELECT * FROM listing WHERE id = ?', id, (err, result)=>{
    if (err) console.log(err);
    callback(err, result);
  })
  db.end();
}

module.exports = {getListingById};