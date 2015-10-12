import React, { Component, PropTypes } from 'react';

require('./AnimalCard.css');

const AnimalCard = props => (
  <div className="animal-card">
    <img src={props.fotos[0]} />
    <div>
      <p><b>Nome: </b>{props.nome}</p>
      <p><b>Espécie: </b>{props.especie}</p>
    </div>
  </div>
);

AnimalCard.propTypes = {
  nome: PropTypes.string.isRequired,
  especie: PropTypes.string.isRequired,
  fotos: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AnimalCard;
