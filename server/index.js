var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path')
var port = '1314'
var db = require('./database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public/dist')))

app.post('/api/reservation/search', (req, res)=>{
  db.getListingById(req.query.id, (err, result)=>{
    if (err) console.log(err);
    res.send(result);
  })
})

app.get('/api/reservation', (req, res) => {
  res.send(req.query);
})

app.listen(port, ()=>{
  console.log(`listening to ${port}`);
})