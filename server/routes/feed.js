var async = require('async');
var auth = require('../auth');
var db = require('../db');

function get(req, res) {
  var query =
    "SELECT a.id, a.nome, e.nome as especie, a.raca, " +
    "case a.porte " +
    "    when 1 then 'Pequeno' " +
    "    when 2 then 'Médio' " +
    "    when 3 then 'Grande' " +
    "    else null " +
    "end as porte, " +
    "a.idade " +
    "FROM animais a " +
    "INNER JOIN especies e ON e.id = a.especieId";

  if (req.user) {
    query += " WHERE a.usuarioId != " + req.user.id;
  }

  db.query(query, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    async.each(
      result.rows,
      function (animal, callback) {
        animal.fotos = [];

        db.query('SELECT id FROM animais_fotos WHERE animalId = $1', [animal.id], function (err, result) {
          if (err) {
            callback(err);
          }

          result.rows.forEach(function (r)  {
            animal.fotos.push('/api/fotos/' + r.id);
          });

          callback();
        });
      },
      function (err) {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.json(result.rows);
        }
      }
    );
  });
}

module.exports = function (app) {
  app.get('/feed', auth({ optional: true }), get);
};
