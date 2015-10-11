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
  raca: {
    type: Sequelize.STRING(50)
  },
  porte: {
    type: Sequelize.INTEGER
  },
  idade: {
    type: Sequelize.INTEGER
  }
});

db.AnimaisFotos = sequelize.define('animais_fotos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  foto: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

db.Especies.hasMany(db.Animais, {
  foreignKey: {
    name: 'especie_id',
    allowNull: false
  }
});

db.Usuarios.hasMany(db.Animais, {
  foreignKey: {
    name: 'usuario_id',
    allowNull: false
  }
});

db.Animais.hasMany(db.AnimaisFotos, {
  foreignKey: {
    name: 'animal_id',
    allowNull: false
  }
});

db.Animais.belongsToMany(db.Usuarios, {
  as: 'interessados',
  through: 'animais_interesses',
  foreignKey: 'animal_id'
});

db.Usuarios.belongsToMany(db.Animais, {
  as: 'interesses',
  through: 'animais_interesses',
  foreignKey: 'usuario_id'
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
