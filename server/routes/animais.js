var auth = require('../auth');
var db = require('../db');

function get(req, res) {
  var query = 'SELECT id, nome FROM animais WHERE usuarioId = $1';

  db.query(query, [req.user.id] ,function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(result.rows);
  });
}

module.exports = function (app) {
  app.get('/animais', auth, get);
};
