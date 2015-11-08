var db = require('../db');

function get(req, res) {
  var query = 'SELECT id, nome FROM especies';

  db.query(query, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(result.rows);
  });
}

module.exports = function (app) {
  app.get('/especies', get);
};
