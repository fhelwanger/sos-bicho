import React, { Component, PropTypes } from 'react';

const AnimalCard = props => (
  <div>
    <p><b>Nome: </b>{props.nome}</p>
  </div>
);

AnimalCard.propTypes = {
  nome: PropTypes.string.isRequired
}

export default AnimalCard;
