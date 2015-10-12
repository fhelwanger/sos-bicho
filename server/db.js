var pg = require('pg');
var connectionString = "postgres://postgres:_43690@localhost/sos_bicho";

function query(query, parameters, callback) {
  if (!callback) {
    callback = parameters;
    parameters = null;
  }

  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.error('error connection to db', err);
      return callback('Erro ao conectar com o banco de dados', null);
    }

    client.query(query, parameters, function(err, result) {
      done();

      if(err) {
        console.error('error running query', err);
        return callback('Erro ao executar consulta no banco de dados', null);
      }

      callback(null, result);
    });
  });
};

module.exports = {
  query: query
};
