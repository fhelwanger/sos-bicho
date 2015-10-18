import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextBox from '../Components/TextBox';
import Button from '../Components/Button';
import {
  criarUsuario,
  informarErros,
  limparErro
} from '../actions/usuarios';

require('./CriarConta.css');

class CriarConta extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCriarClick = this.handleCriarClick.bind(this);

    this.state = {
      nome: '',
      login: '',
      senha: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(informarErros([]));
  }

  handleInputChange(value, name) {
    this.props.dispatch(limparErro(name));

    this.setState({
      [name]: value
    });
  }

  handleCriarClick() {
    this.props.dispatch(criarUsuario(this.state, this.props.history));
  }

  render() {
    return (
      <div className="criar-conta">
        <h2>Criar Conta</h2>
        <TextBox
          name="nome"
          label="Nome"
          required
          errorMessage={this.props.erros.nome}
          onChange={this.handleInputChange}
        />
        <TextBox
          name="login"
          label="Login"
          required
          errorMessage={this.props.erros.login}
          onChange={this.handleInputChange}
        />
        <TextBox
          name="senha"
          label="Senha"
          type="password"
          required
          errorMessage={this.props.erros.senha}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleCriarClick}>
          Criar
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let erros = state.usuarios.erros.reduce((acc, x) => {
    return Object.assign(acc, {
      [x.prop]: x.msg
    });
  }, {});

  return {
    erros
  };
}

export default connect(mapStateToProps)(CriarConta);
