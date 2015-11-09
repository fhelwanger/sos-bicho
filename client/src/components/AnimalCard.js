import React, { Component, PropTypes } from 'react';
import '../styles/AnimalCard.scss';

class AnimalCard extends Component {
  static propTypes = {
    animal: PropTypes.object.isRequired,
    usuario: PropTypes.object,
    onLikeClick: PropTypes.func.isRequired,
    onDislikeClick: PropTypes.func.isRequired
  }

  handleLikeClick(e) {
    e.preventDefault();
    this.props.onLikeClick(this.props.animal.id);
  }

  handleDislikeClick(e) {
    e.preventDefault();
    this.props.onDislikeClick(this.props.animal.id);
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
              {
                this.props.animal.interessado
                ?
                <a href="#" onClick={::this.handleDislikeClick}>
                  <i className="fa fa-heart" ></i> Não quero
                </a>
                :
                <a href="#" onClick={::this.handleLikeClick}>
                  <i className="fa fa-heart-o" ></i> Eu quero!
                </a>
              }
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AnimalCard;
