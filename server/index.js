var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var app = express();
var api = express.Router();

app.set('port', process.env.PORT || 1337);

app.use(compression());
app.use(express.static('client/dist'));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
app.use('/api', api);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

require('./routes/login')(api);
require('./routes/usuarios')(api);
require('./routes/feed')(api);
require('./routes/fotos')(api);
require('./routes/animais')(api);
require('./routes/especies')(api);

var server = app.listen(app.get('port'), function () {
  console.log('Listening on port %s', server.address().port);
});
