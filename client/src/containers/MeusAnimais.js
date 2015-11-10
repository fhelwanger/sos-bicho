import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { carregarLista, setAdotado, setDisponivel } from '../actions/animais';
import Button from '../components/Button';
import Table from '../components/Table';
import '../styles/MeusAnimais.scss';

@connect(
  state => ({
    lista: state.animais.lista
  }),
  { carregarLista, setAdotado, setDisponivel, pushState }
)
class MeusAnimais extends Component {
  componentDidMount() {
    this.props.carregarLista();
  }

  handleNovoClick() {
    this.props.pushState(null, '/animal')
  }

  handleAdotadoClick(id) {
    this.props.setAdotado(id);
  }

  handleDisponivelClick(id) {
    this.props.setDisponivel(id);
  }

  render() {
    const columns = [
      { key: 'nome', header: 'Nome' }
    ];

    return (
      <div className="meus-animais">
        <h2>
          Meus animais
          <Button onClick={::this.handleNovoClick}>Novo</Button>
        </h2>
        <Table
          columns={columns}
          data={this.props.lista}
          onAdotadoClick={::this.handleAdotadoClick}
          onDisponivelClick={::this.handleDisponivelClick}
        />
      </div>
    );
  }
}

export default MeusAnimais;
