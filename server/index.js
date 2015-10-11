var express = require('express');
var app = express();
var db = require('./db');

app.use(express.static('client/dist'));

// app.get('/', function (req, res) {
//   db.Animais.findAll().then(function (resp) {
//     res.json(resp);
//   });
// });

db.sequelize.sync().then(function () {
  var server = app.listen(1337, function () {
    console.log('Listening on port %s', server.address().port);
  });
});
