var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var api = express.Router();

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

require('./routes/login')(api);
require('./routes/usuarios')(api);
require('./routes/feed')(api);
require('./routes/fotos')(api);
require('./routes/animais')(api);

var server = app.listen(1337, function () {
  console.log('Listening on port %s', server.address().port);
});
