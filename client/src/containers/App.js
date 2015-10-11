import React, { Component } from 'react';
import Header from '../components/Header';
import AnimalCard from '../components/AnimalCard';
import { connect } from 'react-redux';

import { solicitarAnimais } from '../actions/animais';

class App extends Component {
  a() {
    this.props.dispatch(solicitarAnimais());
  }

  render() {
    return (
      <div onClick={this.a.bind(this)}>
        <Header />
        {this.props.animais.map(this.renderAnimalCard)}
        <p>{JSON.stringify(this.props.animais)}</p>
      </div>
    );
  }

  renderAnimalCard(animal) {
    return (
      <AnimalCard
        key={animal.id}
        nome={animal.nome} />
    );
  }
}

function select(state) {
  return {
    animais: state.animais
  };
}

export default connect(select)(App);
