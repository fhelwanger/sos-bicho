var express = require('express');
var app = express();
var db = require('./db');

app.use(express.static('client/dist'));

app.get('/animais', function (req, res) {
  db.Animais.findAll({include: [db.AnimaisFotos, {model: db.Usuarios, as: 'interessados'}]}).then(function (animais) {
    res.json(animais);
  });
});

db.sequelize.sync({force: true}).then(function () {
  var server = app.listen(1337, function () {
    console.log('Listening on port %s', server.address().port);
  });
});
