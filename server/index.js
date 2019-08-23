var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path')
var port = '1314'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public/dist')))

app.post('api/reservation/search', (req, res)=>{
  res.send('post req received');
})

app.listen(port, ()=>{
  console.log(`listening to ${port}`);
})