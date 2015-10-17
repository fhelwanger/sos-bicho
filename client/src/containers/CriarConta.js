import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextBox from '../Components/TextBox';
import Button from '../Components/Button';

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

  handleInputChange(value, name) {
    this.setState({
      [name]: value
    });
  }

  handleCriarClick() {
    alert(JSON.stringify(this.state, null, 4));
  }

  render() {
    return (
      <div className="criar-conta">
        <h2>Criar Conta</h2>
        <TextBox
          name="nome"
          label="Nome"
          onChange={this.handleInputChange}
          required
        />
        <TextBox
          name="login"
          label="Login"
          onChange={this.handleInputChange}
          required
        />
        <TextBox
          name="senha"
          label="Senha"
          onChange={this.handleInputChange}
          required
        />
        <Button onClick={this.handleCriarClick}>
          Criar
        </Button>
      </div>
    );
  }
}

export default connect()(CriarConta);
