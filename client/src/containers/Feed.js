import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carregarFeed } from '../actions/feed';
import AnimalCard from '../components/AnimalCard';

@connect(
  state => ({
    feed: state.feed.feed,
    usuarioLogado: state.app.usuarioLogado
  }),
  { carregarFeed }
)
class Feed extends Component {
  componentDidMount() {
    this.props.carregarFeed();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.usuarioLogado != this.props.usuarioLogado) {
      this.props.carregarFeed();
    }
  }

  handleLikeClick(animalId) {
    alert(animalId);
  }

  render() {
    return (
      <div>
        {this.props.feed.map(::this.renderAnimalCard)}
      </div>
    );
  }

  renderAnimalCard(animal) {
    return (
      <AnimalCard
        key={animal.id}
        animal={animal}
        usuario={this.props.usuarioLogado}
        onLikeClick={::this.handleLikeClick} />
    );
  }
}

export default Feed;
