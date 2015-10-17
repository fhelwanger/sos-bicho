var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/login')(app);
require('./routes/usuarios')(app);
require('./routes/animais')(app);

var server = app.listen(1337, function () {
  console.log('Listening on port %s', server.address().port);
});
