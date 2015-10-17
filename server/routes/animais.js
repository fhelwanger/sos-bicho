var _ = require('lodash');
var db = require('../db');

module.exports = function (app) {

  app.get('/animais', function (req, res) {
    var query =
      'SELECT a.id, a.nome, e.nome as especie, a.raca, ' +
      'case a.porte ' +
      '    when 1 then \'Pequeno\' ' +
      '    when 2 then \'Médio\' ' +
      '    when 3 then \'Grande\' ' +
      '    else null ' +
      'end as porte, ' +
      'a.idade, f.id as foto ' +
      'FROM animais a ' +
      'INNER JOIN especies e ON e.id = a.especieId ' +
      'LEFT JOIN animais_fotos f ON f.animalId = a.id';

    db.query(query, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      var animais = [];

      for (var i = 0; i < result.rows.length; i++) {
        var idxAnimal = _.findIndex(animais, { id: result.rows[i].id });

        if (idxAnimal == -1) {
          animais.push({
            id: result.rows[i].id,
            nome: result.rows[i].nome,
            especie: result.rows[i].especie,
            raca: result.rows[i].raca,
            porte: result.rows[i].porte,
            idade: result.rows[i].idade,
            fotos: []
          });

          idxAnimal = animais.length - 1;
        }

        if (result.rows[i].foto) {
          animais[idxAnimal].fotos.push('animais/fotos/' + result.rows[i].foto);
        }
      }

      res.json(animais);
    });
  });

  app.get('/animais/fotos/:id', function (req, res) {
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
  });

};
