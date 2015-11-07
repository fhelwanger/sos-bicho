import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from '../modules/validate';
import { criarConta } from '../actions/conta';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import '../styles/CriarConta.scss';

@connect(
  null,
  { criarConta }
)
@reduxForm({
  form: 'criar-conta',
  fields: ['nome', 'login', 'senha'],
  validate: values => validate(values, {
    nome: { presence: true },
    login: { presence: true },
    senha: { presence: true },
  })
})
class CriarConta extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  handleSubmit(values, dispatch) {
    return this.props.criarConta(values);
  }

  render() {
    const {
      fields: { nome, login, senha },
      handleSubmit
    } = this.props;

    return (
      <form className="criar-conta" onSubmit={handleSubmit(::this.handleSubmit)}>
        <h2>Criar Conta</h2>
        <TextBox label="Nome" field={nome} autoFocus />
        <TextBox label="Login" field={login} />
        <TextBox label="Senha" field={senha} type="password" />
        <Button type="submit">Criar</Button>
      </form>
    );
  }
}

export default CriarConta;
