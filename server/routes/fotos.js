var db = require('../db');

function get(req, res) {
  var query = 'SELECT foto FROM animais_fotos WHERE id = $1';

  db.query(query, [req.params.id], function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    if (result.rowCount > 0) {
      res.set('Content-Type', 'image/jpeg');
      res.send(new Buffer(result.rows[0].foto, 'base64'));
    } else {
      res.status(404).send('Not found');
    }
  });
}

module.exports = function (app) {
  app.get('/fotos/:id', get);
};
