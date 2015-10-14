import React, { Component } from 'react';
import Header from '../components/Header';
import AnimalCard from '../components/AnimalCard';
import { connect } from 'react-redux';

import { solicitarAnimais } from '../actions/animais';

require('./App.css');

class App extends Component {
  componentDidMount() {
    this.props.dispatch(solicitarAnimais());
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.animais.map(this.renderAnimalCard)}
        </div>
      </div>
    );
  }

  renderAnimalCard(animal) {
    return (
      <AnimalCard
        key={animal.id}
        nome={animal.nome}
        especie={animal.especie}
        fotos={animal.fotos} />
    );
  }
}

function select(state) {
  return {
    animais: state.animais
  };
}

export default connect(select)(App);
