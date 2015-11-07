var db = require('../db');

function post(req, res) {
  var dados = {
    nome: req.body.nome,
    login: req.body.login,
    senha: req.body.senha
  };

  validarUsuario(dados, function (err, erros) {
    if (err) {
      return res.status(500).send(err);
    } else if (Object.keys(erros).length > 0) {
      return res.status(400).json(erros);
    }

    db.query('INSERT INTO usuarios (nome, login, senha) VALUES ($1, $2, $3)',
             [dados.nome, dados.login, dados.senha],
             function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      return res.status(201).send();
    });
  });
}

function validarUsuario(dados, callback) {
  var erros = {};

  if (!dados.nome || dados.nome.trim() === '') {
    erros.nome = 'Campo obrigatório.';
  }

  if (!dados.login || dados.login.trim() === '') {
    erros.login = 'Campo obrigatório.';
  }

  if (!dados.senha || dados.senha.trim() === '') {
    erros.senha = 'Campo obrigatório.';
  }

  db.query('SELECT id FROM usuarios WHERE login = $1', [dados.login], function (err, result) {
    if (err) {
      callback(err, null);
    }

    if (result.rowCount > 0) {
      erros.login = 'Login já cadastrado.';
    }

    callback(null, erros);
  });
}

module.exports = function (app) {
  app.post('/usuarios', post);
};
