import React, { Component, PropTypes } from 'react';

require('./AnimalCard.css');

const AnimalCard = props => (
  <div className="animal-card">
    <img src={props.animal.fotos[0]} />
    <div>
      <p><b>Nome: </b>{props.animal.nome}</p>
      <p><b>Espécie: </b>{props.animal.especie}</p>
      <p><b>Raça: </b>{props.animal.raca}</p>
      <p><b>Porte: </b>{props.animal.porte}</p>
      <p><b>Idade: </b>{props.animal.idade}</p>
      <div className="animal-card-toolbar">
        <i className="fa fa-heart-o" onClick={props.onLikeClick.bind(null, props.animal.id)}></i>
      </div>
    </div>
  </div>
);

AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired,
  onLikeClick: PropTypes.func.isRequired
}

export default AnimalCard;
