import React, { Component } from 'react';
import AnimalCard from '../components/AnimalCard';
import { connect } from 'react-redux';
import { solicitarAnimais } from '../actions/animais';

class AnimaisList extends Component {
  constructor(props) {
    super(props);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.renderAnimalCard = this.renderAnimalCard.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(solicitarAnimais());
  }

  handleLikeClick(animalId) {
    alert(animalId);
  }

  render() {
    return (
      <div>
        {this.props.animais.map(this.renderAnimalCard)}
      </div>
    );
  }

  renderAnimalCard(animal) {
    return (
      <AnimalCard
        key={animal.id}
        animal={animal}
        onLikeClick={this.handleLikeClick} />
    );
  }
}

function select(state) {
  return {
    animais: state.animais
  };
}

export default connect(select)(AnimaisList);
