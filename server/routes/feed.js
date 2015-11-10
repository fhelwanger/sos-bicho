var async = require('async');
var auth = require('../auth');
var db = require('../db');

function get(req, res) {
  var query =
    "SELECT a.id, a.nome, e.nome as especie, a.raca, " +
    "case a.porte " +
    "  when 1 then 'Pequeno' " +
    "  when 2 then 'Médio' " +
    "  when 3 then 'Grande' " +
    "  else null " +
    "end as porte, " +
    "a.idade ";

  if (req.user) {
    query +=
      ", EXISTS (" +
      "  SELECT animalId FROM animais_interesses " +
      "  WHERE animalId = a.id AND usuarioId = " + req.user.id +
      ") as interessado ";
  }

  query +=
    "FROM animais a " +
    "INNER JOIN especies e ON e.id = a.especieId " +
    "WHERE a.adotado = false";

  if (req.query.especie) {
    query += " AND a.especieId = " + req.query.especie;
  }

  if (req.query.porte) {
    query += " AND a.porte = " + req.query.porte;
  }

  if (req.query.idade) {
    query += " AND a.idade = " + req.query.idade;
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
