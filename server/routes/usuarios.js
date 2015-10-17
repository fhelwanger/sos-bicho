var db = require('../db');

module.exports = function (app) {

  app.post('/usuarios', function (req, res) {
    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;
    var query = '';
    var erros = [];

    if (!nome || nome.trim() === '') {
      erros.push({
        prop: 'nome',
        msg: 'Campo obrigatório.'
      });
    }

    if (!login || login.trim() === '') {
      erros.push({
        prop: 'login',
        msg: 'Campo obrigatório.'
      });
    }

    if (!senha || senha.trim() === '') {
      erros.push({
        prop: 'senha',
        msg: 'Campo obrigatório.'
      });
    }

    if (erros.length > 0) {
      return res.status(400).json(erros);
    }

    query = 'SELECT id FROM usuarios WHERE login = $1';

    db.query(query, [login], function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      if (result.rowCount === 0) {
        query = 'INSERT INTO usuarios (nome, login, senha) VALUES ($1, $2, $3)';

        db.query(query, [nome, login, senha], function (err, result) {
          if (err) {
            return res.status(500).send(err);
          }

          return res.status(201).send();
        });

      } else {
        erros.push({
          prop: 'login',
          msg: 'Login já cadastrado.'
        });

        return res.status(400).json(erros);
      }
    });
  });

};
