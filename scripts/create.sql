CREATE TABLE usuarios (
  id SERIAL NOT NULL,
  nome VARCHAR(50) NOT NULL,
  login VARCHAR(50) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  CONSTRAINT pk_usuarios PRIMARY KEY (id)
);

CREATE TABLE especies (
  id SERIAL NOT NULL,
  nome VARCHAR(50) NOT NULL,
  CONSTRAINT pk_especies PRIMARY KEY (id)
);

CREATE TABLE animais (
  id SERIAL NOT NULL,
  nome VARCHAR(50) NOT NULL,
  especieId INT NOT NULL,
  raca VARCHAR(50) NULL,
  porte SMALLINT NULL,
  idade SMALLINT NULL,
  usuarioId INT NOT NULL,
  CONSTRAINT pk_animais PRIMARY KEY (id)
);

ALTER TABLE animais ADD CONSTRAINT pk_animais_especie
  FOREIGN KEY (especieId) REFERENCES especies (id);

ALTER TABLE animais ADD CONSTRAINT pk_animais_usuario
  FOREIGN KEY (usuarioId) REFERENCES usuarios (id);

CREATE TABLE animais_fotos (
  id SERIAL NOT NULL,
  animalId INT NOT NULL,
  foto TEXT NOT NULL,
  CONSTRAINT pk_animais_fotos PRIMARY KEY (id)
);

ALTER TABLE animais_fotos ADD CONSTRAINT pk_animais_fotos_animal
  FOREIGN KEY (animalId) REFERENCES animais (id);

CREATE TABLE animais_interesses (
  animalId INT NOT NULL,
  usuarioId INT NOT NULL,
  CONSTRAINT pk_animais_interesses PRIMARY KEY (animalId, usuarioId)
);

ALTER TABLE animais_interesses ADD CONSTRAINT pk_animais_interesses_animal
  FOREIGN KEY (animalId) REFERENCES animais (id);

ALTER TABLE animais_interesses ADD CONSTRAINT pk_animais_interesses_usuario
  FOREIGN KEY (usuarioId) REFERENCES usuarios (id);
