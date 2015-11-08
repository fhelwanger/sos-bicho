var basicAuth = require('basic-auth');
var db = require('./db');

module.exports = function (options) {
  options = options || {};

  function auth(req, res, next) {
    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
      return unauthorized(res, next);
    }

    var query = 'SELECT * FROM usuarios WHERE login = $1 and senha = $2';

    db.query(query, [user.name, user.pass], function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }

      if (result.rowCount > 0) {
        req.user = result.rows[0];
        return next();
      } else {
        return unauthorized(res, next);
      }
    });
  }

  function unauthorized(res, next) {
    if (options.optional) {
      next();
    } else {
      res.send(401);
    }
  }

  return auth;
};
