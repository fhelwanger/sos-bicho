var async = require('async');
var auth = require('../auth');
var db = require('../db');

function get(req, res) {
  var query = 'SELECT id, nome, adotado FROM animais ' +
              'WHERE usuarioId = $1 ORDER BY nome';

  db.query(query, [req.user.id], function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(result.rows);
  });
}

function getOne(req, res) {
  var query = 'SELECT a.nome, a.especieId as especie, a.raca, a.porte, a.idade ' +
              'FROM animais a ' +
              'WHERE a.id = $1 and a.usuarioId = $2';
  var params = [req.params.id, req.user.id];

  db.query(query, params, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    if (result.rowCount === 0) {
      return res.status(404).send();
    }

    var animal = result.rows[0];

    query = 'SELECT foto FROM animais_fotos WHERE animalId = $1';

    db.query(query, [req.params.id], function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      animal.fotos = [];

      for (var i = 0; i < result.rowCount; i++) {
        animal.fotos.push(result.rows[i].foto);
      }

      query = 'SELECT u.nome FROM animais_interesses ai ' +
              'INNER JOIN usuarios u ON u.id = ai.usuarioId ' +
              'WHERE ai.animalId = $1 ' +
              'ORDER BY u.nome';

      db.query(query, [req.params.id], function (err, result) {
        if (err) {
          return res.status(500).send(err);
        }

        animal.interessados = [];

        for (var i = 0; i < result.rowCount; i++) {
          animal.interessados.push(result.rows[i].nome);
        }

        return res.send(animal);
      });
    });
  });
}

function post(req, res) {
  var dados = parseAnimal(req);

  validarAnimal(dados, function (err, erros) {
    if (err) {
      return res.status(500).send(err);
    } else if (Object.keys(erros).length > 0) {
      return res.status(400).json(erros);
    }

    var query = 'INSERT INTO animais ' +
                '(nome, especieId, raca, porte, idade, usuarioId) ' +
                'VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';

    var params = buildParams(dados);

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

function put(req, res) {
  var dados = parseAnimal(req);

  validarAnimal(dados, function (err, erros) {
    if (err) {
      return res.status(500).send(err);
    } else if (Object.keys(erros).length > 0) {
      return res.status(400).json(erros);
    }

    var query = 'UPDATE animais ' +
                'SET nome = $1, especieId = $2, raca = $3, ' +
                'porte = $4, idade = $5 ' +
                'WHERE usuarioId = $6 and id = $7';

    var params = buildParams(dados);

    db.query(query, params, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      query = 'DELETE FROM animais_fotos WHERE animalId = $1';

      db.query(query, [dados.id], function (err, result) {
        if (err) {
          return res.status(500).send(err);
        }

        async.each(dados.fotos, createSaveFoto(dados.id), function () {
          return res.status(204).send();
        });
      });
    });
  });
}

function parseAnimal(req) {
  return {
    id: req.params.id || 0,
    nome: req.body.nome,
    especieId: parseInt(req.body.especie) || null,
    raca: req.body.raca,
    porte: parseInt(req.body.porte) || null,
    idade: parseInt(req.body.idade) || null,
    usuarioId: req.user.id,
    fotos: req.body.fotos
  };
}

function buildParams(dados) {
  var params = [
    dados.nome,
    dados.especieId,
    dados.raca,
    dados.porte,
    dados.idade,
    dados.usuarioId
  ];

  if (dados.id) {
    params.push(dados.id);
  }

  return params;
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

function postInteresse(req, res) {
  var query = 'SELECT * FROM animais_interesses ' +
              'WHERE usuarioId = $1 AND animalId = $2';
  var params = [req.user.id, req.params.id];

  db.query(query, params, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    if (result.rowCount > 0) {
      return res.status(201).send();
    }

    query = 'INSERT INTO animais_interesses (usuarioId, animalId) ' +
            'VALUES ($1, $2)';

    db.query(query, params, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      return res.status(201).send();
    });
  });
}

function deleteInteresse(req, res) {
  var query = 'DELETE FROM animais_interesses ' +
              'WHERE usuarioId = $1 AND animalId = $2';
  var params = [req.user.id, req.params.id];

  db.query(query, params, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(204).send();
  });
}

function postAdotado(req, res) {
  var query = 'UPDATE animais SET adotado = $1 ' +
              'WHERE id = $2 and usuarioId = $3';
  var params = [req.body.adotado, req.params.id, req.user.id];

  db.query(query, params, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(204).send();
  });
}

module.exports = function (app) {
  app.get('/animais', auth(), get);
  app.get('/animais/:id', auth(), getOne);
  app.post('/animais', auth(), post);
  app.put('/animais/:id', auth(), put);
  app.post('/animais/interesse/:id', auth(), postInteresse);
  app.delete('/animais/interesse/:id', auth(), deleteInteresse);
  app.post('/animais/adotado/:id', auth(), postAdotado);
};
