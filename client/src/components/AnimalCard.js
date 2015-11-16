import React, { Component, PropTypes } from 'react';
import '../styles/AnimalCard.scss';

class AnimalCard extends Component {
  static propTypes = {
    animal: PropTypes.object.isRequired,
    usuario: PropTypes.object,
    onLikeClick: PropTypes.func.isRequired,
    onDislikeClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { currentFoto: 0 };
  }

  handleLikeClick(e) {
    e.preventDefault();
    this.props.onLikeClick(this.props.animal.id);
  }

  handleDislikeClick(e) {
    e.preventDefault();
    this.props.onDislikeClick(this.props.animal.id);
  }

  handlePreviousFoto(e) {
    e.preventDefault();

    let currentFoto = this.state.currentFoto - 1;

    if (currentFoto < 0) {
      currentFoto = 0;
    }

    this.setState({
      currentFoto
    });
  }

  handleNextFoto(e) {
    e.preventDefault();

    let currentFoto = this.state.currentFoto + 1;

    if (currentFoto >= this.props.animal.fotos.length) {
      currentFoto--;
    }

    this.setState({
      currentFoto
    });
  }

  render() {
    const photosCount = this.props.animal.fotos.length;
    const hasPrevPhoto = this.state.currentFoto > 0;
    const hasNextPhoto = this.state.currentFoto < (photosCount - 1);

    return (
      <div className="animal-card">
        <a
          className="foto-nav"
          href="#"
          onClick={::this.handlePreviousFoto}
          style={{visibility: (hasPrevPhoto ? 'visible' : 'hidden')}}
        >
          <i className="fa fa-arrow-left"></i>
        </a>
        <img src={this.props.animal.fotos[this.state.currentFoto]} />
        <a
          className="foto-nav"
          href="#"
          onClick={::this.handleNextFoto}
          style={{visibility: (hasNextPhoto ? 'visible' : 'hidden')}}
        >
          <i className="fa fa-arrow-right"></i>
        </a>

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
                  <i className="fa fa-heart"></i> Não quero
                </a>
                :
                <a href="#" onClick={::this.handleLikeClick}>
                  <i className="fa fa-heart-o"></i> Eu quero!
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
