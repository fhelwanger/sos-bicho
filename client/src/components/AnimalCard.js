import React, { Component, PropTypes } from 'react';

require('./AnimalCard.css');

class AnimalCard extends Component {
  constructor(props) {
    super(props);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick(e) {
    e.preventDefault();
    this.props.onLikeClick(this.props.animal.id);
  }

  render() {
    return (
      <div className="animal-card">
        <img src={this.props.animal.fotos[0]} />
        <div>
          <p><b>Nome: </b>{this.props.animal.nome}</p>
          <p><b>Espécie: </b>{this.props.animal.especie}</p>
          <p><b>Raça: </b>{this.props.animal.raca}</p>
          <p><b>Porte: </b>{this.props.animal.porte}</p>
          <p><b>Idade: </b>{this.props.animal.idade}</p>
          {this.props.usuario ? (
            <div className="animal-card-toolbar">
              <a href="#" onClick={this.handleLikeClick}>
                <i className="fa fa-heart-o" ></i> Eu quero!
              </a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired,
  onLikeClick: PropTypes.func.isRequired
}

export default AnimalCard;
