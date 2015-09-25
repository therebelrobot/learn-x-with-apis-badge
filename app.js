var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.get('/learn-badge/:lang', function(req, res, next){
  console.log(req.params)
  res.redirect('https://img.shields.io/badge/Learn%20with%20APIs-'+req.params.lang+'-orange.svg');
});
app.listen(port);
console.log("server started on port " + port);
