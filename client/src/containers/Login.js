import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TextBox from '../Components/TextBox';
import Button from '../Components/Button';
import { fazerLogin, informarMensagemErro } from '../actions/login';

require('./Login.css');

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      login: '',
      senha: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(informarMensagemErro(''));
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.props.onCloseClick();
  }

  handleInputChange(valor, name) {
    this.setState({
      [name]: valor
    });
  }

  handleLoginClick() {
    this.props.dispatch(fazerLogin(
      this.state.login,
      this.state.senha
    ));
  }

  render() {
    return (
      <div className="login">
        <h2>
          Login
          <a href="#" onClick={this.handleCloseClick}>
            <i className="fa fa-times"></i>
          </a>
        </h2>
        <TextBox
          name="login"
          label="Usuário"
          onChange={this.handleInputChange}
        />
        <TextBox
          name="senha"
          label="Senha"
          onChange={this.handleInputChange}
          type="password"
        />
        <span className="error-message">
          {this.props.mensagemErro}
        </span>
        <Link to="/criar-conta" tabIndex="-1">Criar Conta</Link>
        <Button onClick={this.handleLoginClick}>Login</Button>
      </div>
    );
  }
}

Login.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    mensagemErro: state.login.mensagemErro
  }
}

export default connect(mapStateToProps)(Login);
