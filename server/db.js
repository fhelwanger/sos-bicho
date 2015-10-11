var config = require('./config');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
  define: {
    freezeTableName: true,
    underscored: true,
    timestamps: false
  }
});

var db = {};

db.Usuarios = sequelize.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: { msg: 'Já existe um usuário cadastrado com este nome.' },
    validate: {
      notEmpty: {
        msg: 'O campo Nome é obrigatório.'
      }
    }
  },
  senha: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo Senha é obrigatório.'
      }
    }
  }
});

db.Especies = sequelize.define('especies', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: { msg: 'Já existe uma espécie cadastrada com este nome.' },
    validate: {
      notEmpty: {
        msg: 'O campo Nome é obrigatório.'
      }
    }
  }
});

db.Animais = sequelize.define('animais', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo Nome é obrigatório.'
      }
    }
  },
  especieId: {
    type: Sequelize.INTEGER,
    field: 'especie_id',
    allowNull: false,
    references: {
      model: db.Especies,
      key: 'id'
    }
  },
  raca: {
    type: Sequelize.STRING(50)
  },
  porte: {
    type: Sequelize.INTEGER
  },
  idade: {
    type: Sequelize.INTEGER
  },
  usuarioId: {
    type: Sequelize.INTEGER,
    field: 'usuario_id',
    allowNull: false,
    references: {
      model: db.Usuarios,
      key: 'id'
    }
  }
});

db.AnimaisFotos = sequelize.define('animais_fotos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  animalId: {
    type: Sequelize.INTEGER,
    field: 'animal_id',
    allowNull: false,
    references: {
      model: db.Animais,
      key: 'id'
    }
  },
  foto: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

db.AnimaisInteresses = sequelize.define('animais_interesses', {
  animalId: {
    type: Sequelize.INTEGER,
    field: 'animal_id',
    primaryKey: true,
    references: {
      model: db.Animais,
      key: 'id'
    }
  },
  usuarioId: {
    type: Sequelize.INTEGER,
    field: 'usuario_id',
    primaryKey: true,
    references: {
      model: db.Usuarios,
      key: 'id'
    }
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
