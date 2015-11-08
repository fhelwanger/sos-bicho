import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carregarFeed, setFiltrosVisible } from '../actions/feed';
import { carregarLista as carregarEspecies } from '../actions/especies';
import AnimalCard from '../components/AnimalCard';
import SearchBar from '../components/SearchBar';

@connect(
  state => ({
    feed: state.feed.feed,
    filtrosVisible: state.feed.filtrosVisible,
    usuarioLogado: state.app.usuarioLogado,
    especies: state.especies.lista
  }),
  { carregarFeed, carregarEspecies, setFiltrosVisible }
)
class Feed extends Component {
  componentDidMount() {
    this.props.carregarFeed();
    this.props.carregarEspecies();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.usuarioLogado != this.props.usuarioLogado) {
      this.props.carregarFeed();
    }
  }

  handleSearchSubmit(values) {
    this.props.carregarFeed(values);
    this.props.setFiltrosVisible(false);
  }

  handleSearchVisibleClick() {
    this.props.setFiltrosVisible(true);
  }

  handleLikeClick(animalId) {
    alert(animalId);
  }

  render() {
    return (
      <div>
        <SearchBar
          especies={this.props.especies}
          visible={this.props.filtrosVisible}
          onVisibleClick={::this.handleSearchVisibleClick}
          onSubmit={::this.handleSearchSubmit}
        />
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
