import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carregarLista } from '../actions/animais';
import Table from '../components/Table';
import '../styles/MeusAnimais.scss';

@connect(
  state => ({
    lista: state.animais.lista
  }),
  { carregarLista }
)
class MeusAnimais extends Component {
  componentDidMount() {
    this.props.carregarLista();
  }

  render() {
    const columns = [
      { key: 'nome', header: 'Nome' }
    ];

    return (
      <div className="meus-animais">
        <h2>
          Meus animais
        </h2>
        <Table
          columns={columns}
          data={this.props.lista}
        />
      </div>
    );
  }
}

export default MeusAnimais;
