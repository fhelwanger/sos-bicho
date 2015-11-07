import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import '../styles/Header.scss';

class Header extends Component {
  static propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
    usuarioLogado: PropTypes.shape({
      nome: PropTypes.string
    })
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.props.onLoginClick();
  }

  handleLogoutClick(e) {
    e.preventDefault();
    this.props.onLogoutClick();
  }

  render() {
    return (
      <header>
        <h1><i className="fa fa-paw"></i> S.O.S Bicho</h1>
        {this.props.usuarioLogado ? this.renderToolbarLogado() : this.renderToolbarDeslogado()}
      </header>
    );
  }

  renderToolbarLogado() {
    return (
      <div className="toolbar">
        <span className="usuario">
          {this.props.usuarioLogado.nome}
        </span>
        <Link to="/">
          <i className="fa fa-home"></i>Página Inicial
        </Link>
        <Link to="/meus-animais">
          <i className="fa fa-paw"></i>Meus Animais
        </Link>
        <a href="#" onClick={::this.handleLogoutClick}>
          <i className="fa fa-sign-out"></i>Sair
        </a>
      </div>
    );
  }

  renderToolbarDeslogado() {
    return (
      <div className="toolbar">
        <a href="#" onClick={::this.handleLoginClick}>
          <i className="fa fa-sign-in"></i>Entrar
        </a>
      </div>
    );
  }
}

export default Header;
