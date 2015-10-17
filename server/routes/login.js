var db = require('../db');

module.exports = function (app) {

  app.post('/login', function (req, res) {
    var query = 'SELECT nome FROM usuarios WHERE login = $1 and senha = $2';
    var params = [req.body.login, req.body.senha];

    db.query(query, params, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      if (result.rowCount === 0) {
        res.status(400).send('Usuário ou senha inválidos');
      } else {
        res.json(result.rows[0]);
      }
    });
  });

};
