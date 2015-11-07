import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { setLoginVisible } from '../actions/app';
import { fazerLogin } from '../actions/login';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import '../styles/Login.scss';

@connect(
  null,
  { setLoginVisible, fazerLogin }
)
@reduxForm({
  form: 'login',
  fields: ['login', 'senha']
})
class Login extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  handleSubmit(values, dispatch) {
    return this.props.fazerLogin(values.login, values.senha);
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.props.setLoginVisible(false);
  }

  render() {
    const {
      fields: { login, senha },
      handleSubmit
    } = this.props;

    return (
      <form className="login" onSubmit={handleSubmit(::this.handleSubmit)}>
        <h2>
          Login
          <a href="#" onClick={::this.handleCloseClick}>
            <i className="fa fa-times"></i>
          </a>
        </h2>
        <TextBox label="Usuário" field={login} autoFocus />
        <TextBox label="Senha" field={senha} type="password" />
        <span className="error-message">
          {this.props.error}
        </span>
        <Link to="/criar-conta" tabIndex="-1">Criar Conta</Link>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

export default Login;
