var async = require('async');
var auth = require('../auth');
var db = require('../db');

function get(req, res) {
  var query = 'SELECT id, nome FROM animais WHERE usuarioId = $1';

  db.query(query, [req.user.id], function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(result.rows);
  });
}

function post(req, res) {
  var dados = {
    id: 0,
    nome: req.body.nome,
    especieId: parseInt(req.body.especie) || null,
    raca: req.body.raca,
    porte: parseInt(req.body.porte) || null,
    idade: parseInt(req.body.idade) || null,
    usuarioId: req.user.id,
    fotos: req.body.fotos
  };

  validarAnimal(dados, function (err, erros) {
    if (err) {
      return res.status(500).send(err);
    } else if (Object.keys(erros).length > 0) {
      return res.status(400).json(erros);
    }

    var query = 'INSERT INTO animais ' +
                '(nome, especieId, raca, porte, idade, usuarioId) ' +
                'VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';

    var params = [
      dados.nome,
      dados.especieId,
      dados.raca,
      dados.porte,
      dados.idade,
      dados.usuarioId
    ];

    db.query(query, params, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      async.each(dados.fotos, createSaveFoto(result.rows[0].id), function () {
        return res.status(201).send();
      });
    });
  });
}

function validarAnimal(dados, callback) {
  var erros = {};

  if (!dados.nome || dados.nome.trim() === '') {
    erros.nome = 'Campo obrigatório.';
  }

  if (!dados.especieId) {
    erros.especie = 'Campo obrigatório.';
  }

  if (!dados.porte) {
    erros.especie = 'Campo obrigatório.';
  }

  callback(null, erros);
}

function createSaveFoto(animalId) {
  return function (foto, callback) {
    var query = 'INSERT INTO animais_fotos (animalId, foto) VALUES ($1, $2)';
    var params = [animalId, foto];

    db.query(query, params, callback);
  };
}

module.exports = function (app) {
  app.get('/animais', auth(), get);
  app.post('/animais', auth(), post);
};
